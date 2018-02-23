import React, { Component } from 'react';
import { render } from 'react-dom';
import Login from './Login'


// Stateful class component
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      page: Number,
    };
  }

  render() {
   return (
    <div className='root'>
      <Login /> 
    </div>
   );
  }
}

module.exports = Main
