import React, { Component } from 'react';
import { render } from 'react-dom';

// Presentation component function


const UserMain = (props) => {

    return (
      <div id='userMain'>

        <div className='header'>
          <ul className='list' id='headerList'>
            <li><h3>Groupur</h3></li>
            <li><a className='icon' href='/profile'><img src='client/icons/profile.png'/></a></li>
            <li><a className='icon' href='/'><img src='client/icons/logout.png'/></a></li>
          </ul>
        </div>

        <div className='main'>
          <div className='userMain'>
            <h3> Your Groups </h3>
            <div className='frame'>
              <ul id='userGroupList'>
                <li>          

                {/* {props.userData.groups.map( (group, index) => 
                    <UserDetail myGroup={group}
                                addItem={this.props.addItem} 
                                deleteItem={this.props.deleteItem}
                                leaveGroup={this.props.leaveGroup}
                                addGroup ={this.props.addGroup}/> 
                  )}  */}
                </li>
              </ul>
            </div>
            <div>
              <button href='#'>Create new group</button>
            </div>
          </div>

          <div className='groupsMain'>
            <h3> Groups Avaliable </h3>
            <div className='frame'>
              <ul id='groupsList'>
                <li><button className='userGroup' href='#'>{props.allGroups}</button></li>
              </ul>
            </div>
          </div>
        </div>

        <div className='col-md-12 footer'>
          <ul className='list' id='footerList'>
            <li><a className='list' href='#'>ABOUT US</a></li>
            <li><a className='list' href='#'>SUPPORT</a></li>
            <li><a className='list' href='#'>BLOG</a></li>
            <li><a className='list' href='#'>JOBS</a></li>
            <li><a className='list' href='#'>PRIVACY</a></li>
            <li><a className='list' href='#'>TERMS</a></li>
            <li><a className='list' href='#'>DIRECTORY</a></li>
            <li><a className='list' href='#'>LANGUAGE</a></li>
          </ul>
        </div>

      </div>
    );
  }  

module.exports = UserMain