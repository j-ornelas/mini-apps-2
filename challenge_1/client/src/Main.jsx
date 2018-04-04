import React from 'react';
import axios from 'axios';
import Graph from './Graph.jsx'

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      chartData: {
        labels: [],
        datasets: [{
          label: 'Price of BTC in USD',
          data: []
        }]
      },

      startDate: null ,
      endDate: null
    }
  }

  componentDidMount(){
    this.getCoinInfo()
  }

  getCoinInfoAlt(){
    var URL = 'https://rest.coinapi.io/v1/quotes/BITSTAMP_SPOT_BTC_USD/history?time_start=2016-01-01T00:00:00'
    axios.get(URL,{'headers':{'X-CoinAPI-Key': 'AF33DA2F-BD71-4E0C-AB20-119261DC3BA3'}})
      .then(function(response){
        console.log(response);
      })
      .catch(function(error){
        console.log(error)
      })
  }

  getCoinInfo(){
      var URL = 'https://api.coindesk.com/v1/bpi/historical/close.json';
      var context = this;
      axios.get(URL)
        .then(function(response){
          context.parseCoinInfo(response.data.bpi)
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
    console.log(currentState)
    currentState.labels = labels;
    currentState.datasets[0].data = data;
    this.setState({chartData: currentState})
  }

  render(){
    return (
      <div>
        <Graph chartData={this.state.chartData}/>
      </div >
    )
  }
}

export default Main;
