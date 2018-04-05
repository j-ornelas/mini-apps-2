import React from 'react';
import axios from 'axios';
import Graph from './Graph.jsx'
import Date from './Date.jsx';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      chartData: {
        labels: [],
        datasets: [{
          label: 'Price of BTC in USD',
          backgroundColor: 'rgb(153, 204, 255)',
          borderColor: 'rgb(75,75,75)',
          borderWidth: 1,
          pointRadius: 0,
          pointHitRadius:10,
          lineTension: 0,
          data: []
        }]
      }
    }
    this.formatDate = this.formatDate.bind(this);
  }

  componentDidMount(){
    this.getCoinInfo()
  }

  formatDate(gbDate){
    // "04/04/2017"
    // "2017-04-04"
    // to be used later
    var oldDate = gbDate.split("/");
    var temp = [];
    temp[0] = oldDate[2]
    temp[1] = oldDate[1]
    temp[2] = oldDate[0]
    return temp.join("-")
  }



  getCoinInfo(start, end, currency){
      var URL = `https://api.coindesk.com/v1/bpi/historical/close.json${start}${end}${currency}`;
      var context = this;
      axios.get('/info', {
        params: {
          url:URL
        }
      })
        .then(function(response){
          context.parseCoinInfo(response.data)
        })
        .catch(function(error){
          console.log(error)
        })
  }

  parseCoinInfo(obj){
    var labels = [];
    var data = [];
    for (var key in obj){
      labels.push(key);
      data.push(obj[key])
    }

    var currentState = this.state.chartData;
    currentState.labels = labels;
    currentState.datasets[0].data = data;
    var currentCurrency = document.getElementById('currency').value
    currentState.datasets[0].label = `Price of BTC in ${currentCurrency}`
    this.setState({chartData: currentState, })
  }




  updateDate(){
    var start = document.getElementById('start').value
    var end = document.getElementById('end').value
    var currency = document.getElementById('currency').value
    var curr = `&currency=${currency}`
    this.getCoinInfo(`?start=${start}`, `&end=${end}`, curr)
  }

  render(){

    return (
      <div>
      <button onClick={this.getCoinInfo.bind(this, '?start=2011-01-01', '&end=2018-04-04', '')}>all</button>
        <Graph chartData={this.state.chartData}/>
        <Date updateDate={this.updateDate.bind(this)}/>
      </div >
    )
  }
}

export default Main;
