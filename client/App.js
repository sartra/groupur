import React, { Component } from 'react';
import { render } from 'react-dom';
import Login from './Login';
import UserMain from './UserMain';


// Stateful class component
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      userMain: false,
      activeSes: false,
      modification: false,
      userData: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.leaveGroup = this.leaveGroup.bind(this);
  }


  addItem(e) {
    fetch('/add-group-order', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({group_id: e.props.myGroup.group_id})  
    })
  }

  deleteItem(e) {
    fetch('/remove-group-order', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({group_id: e.props.myGroup.group_id})  
    })
  }

  leaveGroup(e) {
    fetch('/remove-group', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({group_id: e.props.myGroup.group_id})  
    })
  }


  // check wether there is cookie in the browser or not.
  // if not, render Login; if true, render UserMain
  componentDidMount() { 
    fetch('/verify', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
    })
    .then((res) => {
      if (res.status !== 200) {
        console.log(res)
        return 
      }
      return res.json() // sessionController.verifyUser defines data's structure in its res.send(true)
    })
    .then((data) => { 
      this.setState({activeSes: data})
    })
  }
  
  


  handleClick(e) {
    const user = document.getElementById('inputU').value;
    const password = document.getElementById('inputP').value;
    
    if (!user || !password) {
      return false
    }

    document.getElementById('inputU').value = null;
    document.getElementById('inputP').value = null;

    const buttonId = e.target.id;
    const route = (e.target.id === 'signI' ? '/login' : '/signup');
    console.log(route)

    
    fetch(route, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: user, password: password})
    })
    .then((res) => {
      let currentState = Object.assign(this.state);   //  does not copy memory address but data
      currentState.userMain = true;   
      currentState.userData = res;    // this res (response) from verifyuser has all the info of the user
      if (res) {this.setState(currentState)}
    });
  }


  render() {
      
      return (
        this.state.activeSes ? <UserMain userData={this.state.userData}
                                         addGroup ={this.addGroup} 
                                         addItem={this.addItem} 
                                         deleteItem={this.deleteItem} 
                                         leaveGroup={this.leaveGroup}/> : 
                                         <Login handleClick={this.handleClick} /> 
   )
  }
}

module.exports = App