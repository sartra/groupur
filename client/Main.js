import React, { Component } from 'react';
import { render } from 'react-dom';
import Login from './Login';
import UserMain from './UserMain'
//import express from 'express';


// Stateful class component
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      access: null
    };
  }

  handleClickI() {
    fetch('/usermain')
  }

  handleClickU() {
    fetch('/createuser') 
  }

  render() {
    return (
      <div className='root'>
        <UserMain /> 
      </div>
     );
  //  return (
  //   <div className='root'>
  //     <Login handleClickI={this.handleClickI} handleClickU={this.handleClickU} /> 
  //   </div>
  //  );
  }
}

module.exports = Main
