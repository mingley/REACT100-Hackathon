import React, { Component } from 'react';
import axios from 'axios'
import Crypto from './crypto';

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
        cryptos: [],
        joke: ""
    };
}

componentWillMount(){
  axios
    .get('https://api.coinlore.com/api/global/')
    .then(response => response.data)
    .then(cryptos => this.setState({ cryptos }));
  axios
    .get('https://geek-jokes.sameerkumar.website/api')
    .then(response => response.data)
    .then(joke => this.setState({joke}));

  
}
  
  render() {
    return (
      <div className='App'>
        
        <div className="container">
          <div className="jumbotron">
          <img className='mr-3' src='https://s.yimg.com/ny/api/res/1.2/wr9JK3S0eSXkyFuDo6IrEw--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en-US/homerun/ccn_656/e47a8489d4d4782294bc3001c3e6628e'></img>
          <h1 className="display-4">Global Cryptocurrency Market Information</h1>
            { 
              this.state.cryptos.map(crypto => (
            <Crypto
            coins_count={crypto.coins_count}
            active_markets={crypto.active_markets}
            total_mcap={crypto.total_mcap}
            total_volume={crypto.total_volume} 
            btc_d={crypto.btc_d}
            eth_d={crypto.eth_d}
            mcap_change={crypto.mcap_change}
            /> ))
            }
            <p className="lead">Information retrieved via <a href="https://www.coinlore.com/">CoinLore</a> API.</p>
            </div>
            <div className='jumbotron'>
              <h2>Random Joke for your viewing pleasure:</h2>
              <h1>{this.state.joke}</h1>
            </div>
        </div>

      </div>
    );
  }
}

export default App;
