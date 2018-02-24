import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login'
import UserMain from './UserMain'


// Stateful class component
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      isLoggedIn: false,
    };
  }

  componentDidMount() {
    fetch('/verify'
    // , {
    //   method: 'GET',
      // headers: {
      //   Accept: 'application/json',
      //   'Content-Type': 'application/json'
      // }}
    ).then((response) => {
      if(response.status != 200) {
        console.log(response.status);
        return;
      }
      console.log('success');
      console.log('response', response);
      return response.json();
    }).then((data) => {
      console.log('data', data);
        this.setState({
          isLoggedIn: data.result
        })
      })
  }

  render() {
    return (
        this.state.isLoggedIn ? <UserMain /> : <Login />
    )



    // <Router>
    //   <Router path="/landing" component={Login} />
    //   <Router path="/myAccount" component={UserMain} />
    // </Router>

  }
}

module.exports = App;
