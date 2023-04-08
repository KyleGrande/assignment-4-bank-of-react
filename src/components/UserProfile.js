/*==================================================
src/components/UserProfile.js

The UserProfile component is used to demonstrate the use of Route and Link.
Note: You don't need to work on this file for the Assignment.
==================================================*/
import React, {Component} from 'react';

import './UserProfile.css';

class UserProfile extends Component {
  render() {
    return (
      <div className='userprofile'>
        <div className='profile'>
        <h1>User Profile</h1>

        <h2>Username: {this.props.userName}</h2>
        <h3>Member Since: {this.props.memberSince}</h3>
        <br/>
      </div>
      </div>
    );
  }
}

export default UserProfile;