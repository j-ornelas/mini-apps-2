import React from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import SearchBar from './SearchBar.jsx'
import ElementList from './ElementList.jsx'

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
      searchTerm: ""
    }
  }

  handleChange(event){
    this.setState({searchTerm:event.target.value})
  }

  search(searchTerm){
    this.findTotalNum(searchTerm)
    this.getInfoFromServer(searchTerm, 0)

  }

  componentDidMount(){
  }
  findTotalNum(searchTerm){
    let context = this;
    axios.get(`/events?q=${searchTerm}`)
    .then((response)=>{
      this.setState({pageCount: response.data.length / 10  })
    })
    .catch((error)=>{
      console.log(error);
    });
  }
  getInfoFromServer(searchTerm, pageNum){
    let context = this;
    axios.get(`/events?q=${searchTerm}&_page=${pageNum}`)
    .then((response)=>{
      context.setState({items:response.data})
    })
    .catch((error)=>{
      console.log(error);
    });
  }

  handlePageClick(e){
    this.getInfoFromServer(this.state.searchTerm, e.selected + 1)
  }


  render(){
    return (
      <div>
      <SearchBar
               search ={this.search.bind(this)}
               searchTerm={this.state.searchTerm}
               handleChange={this.handleChange.bind(this)}
      />
      <ElementList items={this.state.items} />
      <ReactPaginate
               previousLabel={"previous"}
               nextLabel={"next"}
               breakLabel={<a href="">...</a>}
               breakClassName={"break-me"}
               pageCount={this.state.pageCount || 0}
               marginPagesDisplayed={2}
               pageRangeDisplayed={5}
               onPageChange={this.handlePageClick.bind(this)}
               containerClassName={"pagination"}
               subContainerClassName={"pages pagination"}
               activeClassName={"active"}
      />
      </div>
    )
  }
}

export default Main;
