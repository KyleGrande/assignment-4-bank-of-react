import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import './Credits.css'; // Import CSS styles

class Credits extends Component {
  // Initialize state
  state = {
    description: '',
    amount: '',
  };

  // Handle input field changes
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  // Handle form submission
  handleSubmit = (e) => {
    e.preventDefault();
    const { description, amount } = this.state;
    const date = new Date().toISOString().slice(0, 10); // Set the current date
    const credit = { description, amount, date };

    // Call the addCredit method from parent component (App)
    this.props.addCredit(credit);

    // Reset input fields
    this.setState({
      description: '',
      amount: '',
    });
  };

  render() {
    // Render credit history in reverse order
    const creditsView = () => {
      const { credits } = this.props;
      const reversedCredits = credits.slice().reverse(); // Make a reversed copy of the credits array
      return reversedCredits.map((credit) => {
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
    };

    return (
      <div className="credits">
        <div className="credit-content">
          <div className="credit-content-left">
            <h1>Credit History</h1>
            <ul className="credit-list">{creditsView()}</ul>
          </div>

          <div className="credit-content-right">
            <h1 className="account-balance">
              <AccountBalance accountBalance={this.props.accountBalance} />
            </h1>
            <form onSubmit={this.handleSubmit} className="credit-form">
              <div className="form-row">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <input
                  type="text"
                  name="description"
                  id="description"
                  value={this.state.description}
                  onChange={this.handleChange}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-row">
                <label htmlFor="amount" className="form-label">
                  Amount
                </label>
                <input
                  type="number"
                  name="amount"
                  id="amount"
                  value={this.state.amount}
                  onChange={this.handleChange}
                  className="form-input"
                  required
                  min="0.01"
                  step="0.01"
                />
              </div>
              <button type="submit" className="form-button">
                Add Credit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Credits;
