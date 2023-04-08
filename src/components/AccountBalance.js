/*==================================================
src/components/AccountBalance.js

The AccountBalance component displays account balance. It is included in other page views.
==================================================*/
import React, {Component} from 'react';
//round accoubt balance to 2 decimal places

class AccountBalance extends Component {
  // Display account balance
  render() {
    return (
      <div>
        Balance: {this.props.accountBalance.toFixed(2)}
      </div>
    );
  }
}

export default AccountBalance;