import React, { Component } from 'react';
import { render } from 'react-dom';

// Presentation component function
const Login = (props) => {
  
  return (
    <div id='sign'>
      <h2>Groupur</h2>
      <h3>Join other buyers for saving</h3>
      <ul id='signInfo'>
        <li><input className='inputBox' id='inputE' type='text' placeholder='Email'/></li>
        <li><input className='inputBox' id='inputP' type='password' placeholder='Password'/></li>
      </ul>
      <ul id='signButtons'>
        <li>
          <button className='signBox' id='signI' type='submit'>
            Sign in
          </button>
        </li>
        <li>
          <button className='signBox' id='signU' type='submit'>
            Sign up
          </button>
        </li>
      </ul>
    </div>
  )
}

module.exports = Login