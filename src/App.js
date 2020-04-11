import React from "react";
import Data from  "./data.json";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCurrency : 'inr',
      currencies: ['inr','usd'],
      multiplier: 1,
    };
    this.CurrencyMultiplier = {
      'inr': 1,
      'usd' : 1/0.0131042175
    };
    this.handleCurrencyChange = this.handleCurrencyChange.bind(this)
  }

  handleCurrencyChange = (e) => {
    this.setState({
      currentCurrency: e.target.value,
      multiplier: this.CurrencyMultiplier[e.target.value]
    })
  };

  render(){
    return (
        <div className="App">
        
            {
              Data.map((dataItem,index)=>(
                  <div className='product-list' key={index}>
                    <div className="product-container">
                    <img src={dataItem.imageurl} alt={'image'} />
                    </div>
                    <h4>{dataItem.productname}</h4>
                    <h6>{this.state.currentCurrency}&nbsp;&nbsp;&nbsp;<b>{this.state.multiplier * dataItem.price}</b></h6>
                    
                  </div>
              ))
            }
            <h3 className="currenct-text">currency</h3>
            <div className="select">
            <select size="2" onChange={this.handleCurrencyChange}>
            {this.state.currencies.map((currency, index) => (
                <option value={currency} key={index}>{currency}</option>
            ))}
          </select>
            </div>
        </div>
    );
  }

}

export default App;