import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import './Credits.css'; // add this line

class Credits extends Component {
  state = {
    description: '',
    amount: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { description, amount } = this.state;
    const id = Math.floor(Math.random() * 100000); // generate a random id
    const date = new Date().toISOString().slice(0, 10); // set the current date
    const credit = { id, description, amount, date };

    this.props.addCredit(credit);

    this.setState({
      description: '',
      amount: ''
    });
  }



  render() {
    const creditsView = () => {
      const { credits } = this.props;
      const reversedCredits = credits.slice().reverse(); // Add this line to make a reversed copy of the credits array
      return reversedCredits.map((credit) => { // Update this line to use reversedCredits instead of credits
        let date = credit.date.slice(0, 10);
        return (
          <li key={credit.id} className="credit-item">
            <div className="credit-info">
              <div className="credit-amount">{credit.amount}</div>
              <div className="credit-description">{credit.description}</div>
              <div className="credit-date">{date}</div>
            </div>
          </li>
        );
      });
    }

    return (
      <div className="credits">
        <div className="credits-header">
          <div className='credits-header-left'>
            <Link to="/" className="return-button">
              HOME
            </Link>
          </div>
          <div className='credits-header-right'>
              Credits
          </div>
        </div>
        <div className="credit-content">
        <div className='credit-content-left'>
        <ul className="credit-list">{creditsView()}</ul>
        </div>
        <div className='credit-content-right'>

        <form onSubmit={this.handleSubmit} className="credit-form">
        <div className='account-balance'>
        <AccountBalance accountBalance={this.props.accountBalance} />
        </div>
          <div className="form-row"> 
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" name="description" id="description" value={this.state.description} onChange={this.handleChange} className="form-input" />
          </div>
          <div className="form-row">
            <label htmlFor="amount" className="form-label">Amount</label>
            <input type="number" name="amount" id="amount" value={this.state.amount} onChange={this.handleChange} className="form-input"  />
          </div>
          <button type="submit" className="form-button">Add Credit</button>
        </form>       
        </div>
      </div>
      </div>
    );
  }
}

export default Credits;