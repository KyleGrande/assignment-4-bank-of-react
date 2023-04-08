
import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import './Debits.css'; // add this line

class Debits extends Component {
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
    const debit = { id, description, amount, date };

    this.props.addDebit(debit);

    this.setState({
      description: '',
      amount: ''
    });
  }



  render() {
    const debitsView = () => {
      const { debits } = this.props;
      const reversedDebits = debits.slice().reverse(); // Add this line to make a reversed copy of the debits array
      return reversedDebits.map((debit) => { // Update this line to use reversedDebits instead of debits
        let date = debit.date.slice(0, 10);
        return (
          <li key={debit.id} className="debit-item">
            <div className="debit-info">
              <div className="debit-amount">{debit.amount}</div>
              <div className="debit-description">{debit.description}</div>
              <div className="debit-date">{date}</div>
            </div>
          </li>
        );
      });
    }

    return (
      <div className="debits">
        <div className="debit-content">
        <div className='debit-content-left'>
        <h1>
        Debit History
        </h1>
        <ul className="debit-list">{debitsView()}</ul>
        </div>
        <div className='debit-content-right'>
        <h1 className='account-balance'>
        <AccountBalance accountBalance={this.props.accountBalance} />
        </h1>
        <form onSubmit={this.handleSubmit} className="debit-form">

          <div className="form-row"> 
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" name="description" id="description" value={this.state.description} onChange={this.handleChange} className="form-input" required/>
          </div>
          <div className="form-row">
            <label htmlFor="amount" className="form-label">Amount</label>
            <input type="number" name="amount" id="amount" value={this.state.amount} onChange={this.handleChange} className="form-input" required min="0.01" step="0.01" />
          </div>
          <button type="submit" className="form-button">Add Debit</button>
        </form>       
        </div>
      </div>
      </div>
    );
  }
}

export default Debits;