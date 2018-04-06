import React from "react";
import Header from './Header.jsx';
import FormOne from './FormOne.jsx';
import FormTwo from './FormTwo.jsx';
import FormThree from './FormThree.jsx';
import Footer from './Footer.jsx';
import axios from 'axios';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: "", lastName: "", email: "", password:"",
      addressOne: "", addressTwo: "", city: "", state: "", zip: "", phone: "",
      cardNum: "", expDate: "", ccv: "", billingZip: "",
      currentPage: 1,
    }
  }

  goToPage(num){
    this.setState({currentPage:num})
  }

  handleChange(event){
    this.setState({[event.target.id]:event.target.value})
  }

  showPage(num){
    if (num === 1){
      return (<FormOne
        goToPage={this.goToPage.bind(this)}
        handleChange={this.handleChange.bind(this)}
      />)
    } else if (num === 2){
      return (<FormTwo
        goToPage={this.goToPage.bind(this)}
        handleChange={this.handleChange.bind(this)}
      />)
    } else if (num === 3){
      return (<FormThree
        goToPage={this.goToPage.bind(this)}
        handleChange={this.handleChange.bind(this)}
        submitForm={this.submitForm.bind(this)}
      />)
    }
  }

  submitForm(){
    console.log('state', this.state)
    axios.post('/submit', this.state)
    .then(function(response){
      console.log(response.data + ' on ' + response.headers.date)
    })
    .catch(function(error){
      console.log(error)
    })
  }


  render(){
    var pageToShow = this.showPage(this.state.currentPage)
    return (
      <div>
      <Header />
      <div className="page">{pageToShow}</div>
      <Footer />
      </div>
    )
  }
}

export default Main;
