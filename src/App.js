/*==================================================
src/App.js

This is the top-level component of the app.
It contains the top-level state.
==================================================*/
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Import other components
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Credits from './components/Credits';
import Debits from './components/Debits';

class App extends Component {
  constructor() {
    super();
    this.state = {
      accountBalance: 1234567.89,
      creditList: [],
      debitList: [],
      currentUser: {
        userName: 'Joe Smith',
        memberSince: '11/22/99',
      },
    };
  }

  async componentDidMount() {
    // Fetch data from API
    let credits = await (
      await fetch('https://johnnylaicode.github.io/api/credits.json')
    ).json();
    let debits = await (
      await fetch('https://johnnylaicode.github.io/api/debits.json')
    ).json();

    // Update creditList and debitList with data from API
    this.setState({ creditList: credits, debitList: debits });

    let totalCredits = 0;
    let totalDebits = 0;

    // Calculate total credits and debits
    credits.forEach((credit) => {
      totalCredits += credit.amount;
    });

    debits.forEach((debit) => {
      totalDebits += debit.amount;
    });

    // Update account balance
    this.setState({ accountBalance: totalCredits - totalDebits });
  }

  // Add a new credit and update account balance
  addCredit = (credit) => {
    const newCredits = [...this.state.creditList, credit];
    this.setState({
      creditList: newCredits,
      accountBalance: this.state.accountBalance + Number(credit.amount),
    });
  };

  // Add a new debit and update account balance
  addDebit = (debit) => {
    const newDebits = [...this.state.debitList, debit];
    this.setState({
      debitList: newDebits,
      accountBalance: this.state.accountBalance - Number(debit.amount),
    });
  };

  // Update state's currentUser (userName) after "Log In" button is clicked
  mockLogIn = (logInInfo) => {
    const newUser = { ...this.state.currentUser };
    newUser.userName = logInInfo.userName;
    this.setState({ currentUser: newUser });
  };

  // Create Routes and React elements to be rendered using React components
  render() {
    // Create React elements and pass input props to components
    const HomeComponent = () => (
      <Home
        accountBalance={this.state.accountBalance}
        userName={this.state.currentUser.userName}
      />
    );

    const UserProfileComponent = () => (
      <UserProfile
        userName={this.state.currentUser.userName}
        memberSince={this.state.currentUser.memberSince}
      />
    );

    const LogInComponent = () => (
      <LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />
    );

    const CreditsComponent = () => (
      <Credits
        credits={this.state.creditList}
        addCredit={this.addCredit}
        accountBalance={this.state.accountBalance}
      />
    );

    const DebitsComponent = () => (
      <Debits
        debits={this.state.debitList}
        addDebit={this.addDebit}
        accountBalance={this.state.accountBalance}
      />
    );


  // Important: Include the "basename" in Router, which is needed for deploying the React app to GitHub Pages
  return (
    <Router basename="/assignment-4-bank-of-react">
      <div className="App">
        <header className="App-header">
          <nav className="navbar">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/userProfile">
              User Profile
            </Link>
            <Link className="nav-link" to="/login">
              Log In
            </Link>
            <Link className="nav-link" to="/credits">
              Credits
            </Link>
            <Link className="nav-link" to="/debits">
              Debits
            </Link>
          </nav>
        </header>
        <main className="App-main">
          <Route exact path="/" render={HomeComponent} />
          <Route exact path="/userProfile" render={UserProfileComponent} />
          <Route exact path="/login" render={LogInComponent} />
          <Route exact path="/credits" render={CreditsComponent} />
          <Route exact path="/debits" render={DebitsComponent} />
        </main>
      </div>
    </Router>
    );
  }
}

export default App;