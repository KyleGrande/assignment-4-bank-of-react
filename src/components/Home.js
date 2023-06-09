/*==================================================
src/components/Home.js

The Home component displays the user's account balance and a welcome message.
==================================================*/
import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import './Home.css'; // Import the Home.css file

class Home extends Component {
  render() {
    // Render the home page with a welcome message and account balance
    return (
      <div className="home-container">
        <div className="content-container">
          <h1>Bank of React</h1>
          <img src="https://picsum.photos/200/200" alt="bank" />
          <h2>Welcome, {this.props.userName}!</h2>
          <h2>
            <AccountBalance accountBalance={this.props.accountBalance} />
          </h2>
        </div>
      </div>
    );
  }
}

export default Home;
