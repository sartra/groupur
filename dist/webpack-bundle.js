/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/s.t.renshaw/Desktop/codesmith/groupur/node_modules/react/index.js'");

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/s.t.renshaw/Desktop/codesmith/groupur/node_modules/react-dom/index.js'");

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _App = __webpack_require__(46);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react2.default.createElement(_App2.default, null), document.getElementById('contents'));

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactRouterDom = __webpack_require__(47);

var _Login = __webpack_require__(76);

var _Login2 = _interopRequireDefault(_Login);

var _MainPage = __webpack_require__(78);

var _MainPage2 = _interopRequireDefault(_MainPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      activeSession: false,
      userData: {}
    };
    _this.handleClick = _this.handleClick.bind(_this);
    _this.addGroup = _this.addGroup.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'addGroup',
    value: function addGroup() {
      var value = document.getElementById('Group').value;

      fetch('/add-group', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ value: value })
      }).then(function (e) {
        return e.json();
      }).then(function (data) {
        console.log(data);
      });
    }

    // check wether there is cookie in the browser or not.
    // if not, render Login; if true, render UserMain

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      fetch('/verify', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(function (res) {
        // console.log(res)
        if (res.status !== 200) {
          return;
        }
        return res.json(); // sessionController.verifyUser defines data's structure in its res.send(true)
      }).then(function (data) {
        // console.log(data)
        var tempState = _this2.state;
        tempState.activeSession = data.status;
        _this2.setState(tempState);
      }).catch(function (e) {
        return console.log(e);
      });
    }
  }, {
    key: 'handleClick',
    value: function handleClick(event) {
      var _this3 = this;

      var username = document.getElementById('user-input').value;
      var password = document.getElementById('password-input').value;
      console.log('username: ' + username + '...... password: ' + password);

      if (!username || !password) {
        return false;
      }

      document.getElementById('user-input').value = null;
      document.getElementById('password-input').value = null;

      var route = event.target.id === 'log-in' ? '/login' : '/signup';
      console.log(route);

      fetch(route, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, password: password })
      }).then(function (res) {
        if (res.status < 300 && res.status >= 200) return res.json();
      }).then(function (res) {
        console.log(res);
        if (res.message) return console.log(res.message);
        var currentState = Object.assign(_this3.state);
        //  does not copy memory address but data
        // currentState.userData = res;    // this res (response) from verifyuser has all the info of the user
        if (res.activeSession) currentState.activeSession = true;
        /*if (res)*/_this3.setState(currentState);
      });
    }

    // check wether there is cookie in the browser or not.
    // if not, render Login; if true, render UserMain

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this4 = this;

      fetch('/verify', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(function (res) {
        if (res.status !== 200) {
          return;
        }
        return res.json(); // sessionController.verifyUser defines data's structure in its res.send(true)
      }).then(function (data) {
        var tempState = _this4.state;
        tempState.activeSess = data.status;
        _this4.setState(tempState);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return (
        // this.state.activeSes ? <UserMain userData={this.state.userData}
        //                                  addGroup ={this.addGroup} 
        //                                  addItem={this.addItem} 
        //                                  deleteItem={this.deleteItem} 
        //                                  leaveGroup={this.leaveGroup}/> : 
        //                                  <Login handleClick={this.handleClick} /> 
        this.state.activeSession ? _react2.default.createElement(_MainPage2.default, { addGroup: this.addGroup }) : _react2.default.createElement(_Login2.default, { handleClick: this.handleClick })
      );
    }
  }]);

  return App;
}(_react.Component);

module.exports = App;

/***/ }),

/***/ 47:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/s.t.renshaw/Desktop/codesmith/groupur/node_modules/react-router-dom/es/index.js'");

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Presentation component function
var Login = function Login(props) {

  return _react2.default.createElement(
    'div',
    { id: 'sign' },
    _react2.default.createElement(
      'h2',
      null,
      'Groupur'
    ),
    _react2.default.createElement(
      'h3',
      null,
      'Join other buyers for saving'
    ),
    _react2.default.createElement(
      'ul',
      { id: 'signInfo' },
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement('input', { className: 'inputBox', id: 'user-input', type: 'text', placeholder: 'Username' })
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement('input', { className: 'inputBox', id: 'password-input', type: 'password', placeholder: 'Password' })
      )
    ),
    _react2.default.createElement(
      'ul',
      { id: 'signButtons' },
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'button',
          { className: 'signBox', id: 'log-in', type: 'submit', onClick: props.handleClick },
          'Log in'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'button',
          { className: 'signBox', id: 'sign-in', type: 'submit', onClick: props.handleClick },
          'Sign up'
        )
      )
    )
  );
};

module.exports = Login;

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// props being passed down from parent. 
// information is being saved on the client side currently. Nothing is being passed from server. 

var MainPage = function MainPage(props) {

  return (
    // initial header
    _react2.default.createElement(
      'div',
      { id: 'userMain' },
      _react2.default.createElement(
        'div',
        { className: 'header' },
        _react2.default.createElement(
          'ul',
          { className: 'list', id: 'headerList' },
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'h3',
              null,
              ' Groupur '
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { className: 'icon', href: '/profile' },
              _react2.default.createElement('img', { src: 'client/icons/profile.png' })
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { className: 'icon', href: '/' },
              _react2.default.createElement('img', { src: 'client/icons/logout.png' })
            )
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'main' },
        _react2.default.createElement(
          'div',
          { className: 'userMain' },
          _react2.default.createElement(
            'h3',
            null,
            ' Your Groups '
          ),
          _react2.default.createElement(
            'div',
            { className: 'frame' },
            _react2.default.createElement(
              'ul',
              { id: 'userGroupList' },
              _react2.default.createElement('li', null)
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'form',
              { onClick: props.addGroup },
              _react2.default.createElement('input', { id: 'Group', type: 'text', name: 'GroupInput', placeholder: 'Enter name here' }),
              _react2.default.createElement('input', { type: 'submit' })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'groupsMain' },
          _react2.default.createElement(
            'h3',
            null,
            ' Groups Available '
          ),
          _react2.default.createElement(
            'div',
            { className: 'frame' },
            _react2.default.createElement(
              'ul',
              { id: 'groupsList' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'button',
                  { className: 'userGroup', href: '#' },
                  props.allGroups
                )
              )
            )
          )
        )
      )
    )
  );
};

// four divs. There is a main div with three nested children (your groups / groups available / footer)
// each div has additional nesting.. -_-.  

module.exports = MainPage;

// <div className='col-md-12 footer'>
//          <ul className='list' id='footerList'>
//            <li><a className='list' href='#'>ABOUT US</a></li>
//            <li><a className='list' href='#'>SUPPORT</a></li>
//            <li><a className='list' href='#'>BLOG</a></li>
//            <li><a className='list' href='#'>JOBS</a></li>
//            <li><a className='list' href='#'>PRIVACY</a></li>
//            <li><a className='list' href='#'>TERMS</a></li>
//            <li><a className='list' href='#'>DIRECTORY</a></li>
//            <li><a className='list' href='#'>LANGUAGE</a></li>
//          </ul>
//        </div>

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2QxMGIwMGEwNmEzMDE5NWVjZmMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvQXBwLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9Mb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvTWFpblBhZ2UuanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkFwcCIsInByb3BzIiwic3RhdGUiLCJhY3RpdmVTZXNzaW9uIiwidXNlckRhdGEiLCJoYW5kbGVDbGljayIsImJpbmQiLCJhZGRHcm91cCIsInZhbHVlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwiZSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsIkFjY2VwdCIsInJlcyIsInN0YXR1cyIsInRlbXBTdGF0ZSIsInNldFN0YXRlIiwiY2F0Y2giLCJldmVudCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJyb3V0ZSIsInRhcmdldCIsImlkIiwibWVzc2FnZSIsImN1cnJlbnRTdGF0ZSIsIk9iamVjdCIsImFzc2lnbiIsImFjdGl2ZVNlc3MiLCJtb2R1bGUiLCJleHBvcnRzIiwiTG9naW4iLCJNYWluUGFnZSIsImFsbEdyb3VwcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFD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QUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBRUU7QUFBQTtBQUFBLGNBQUssV0FBVSxPQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFJLElBQUcsWUFBUDtBQUNFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxvQkFBUSxXQUFVLFdBQWxCLEVBQThCLE1BQUssR0FBbkM7QUFBd0NOLHdCQUFNeUM7QUFBOUM7QUFBSjtBQURGO0FBREY7QUFGRjtBQXpCRjtBQVRGO0FBRkY7QUFrREQsQ0FwREg7O0FBc0RDO0FBQ0E7O0FBRURKLE9BQU9DLE9BQVAsR0FBaUJFLFFBQWpCOztBQUVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQiIsImZpbGUiOiJ3ZWJwYWNrLWJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDM1KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjZDEwYjAwYTA2YTMwMTk1ZWNmYyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcblxucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50cycpKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBMb2dpbiBmcm9tICcuL0xvZ2luJ1xuaW1wb3J0IE1haW5QYWdlIGZyb20gJy4vTWFpblBhZ2UnXG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7ICBcbiAgICAgIGFjdGl2ZVNlc3Npb246IGZhbHNlLFxuICAgICAgdXNlckRhdGE6IHt9XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYWRkR3JvdXAgPSB0aGlzLmFkZEdyb3VwLmJpbmQodGhpcyk7XG4gIH1cblxuXG4gIGFkZEdyb3VwKCl7XG4gICAgbGV0IHZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0dyb3VwJykudmFsdWVcblxuICAgIGZldGNoKCcvYWRkLWdyb3VwJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnIDogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe3ZhbHVlOiB2YWx1ZX0pXG4gICAgfSlcbiAgICAudGhlbihlID0+IHtcbiAgICAgIHJldHVybiBlLmpzb24oKVxuICAgIH0pXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIH0pXG4gIH1cblxuXG4gIC8vIGNoZWNrIHdldGhlciB0aGVyZSBpcyBjb29raWUgaW4gdGhlIGJyb3dzZXIgb3Igbm90LlxuICAvLyBpZiBub3QsIHJlbmRlciBMb2dpbjsgaWYgdHJ1ZSwgcmVuZGVyIFVzZXJNYWluXG4gIGNvbXBvbmVudERpZE1vdW50KCkgeyBcbiAgICBmZXRjaCgnL3ZlcmlmeScsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH1cbiAgICB9KVxuICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHJlcylcbiAgICAgIGlmIChyZXMuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgcmV0dXJuIFxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlcy5qc29uKCkgLy8gc2Vzc2lvbkNvbnRyb2xsZXIudmVyaWZ5VXNlciBkZWZpbmVzIGRhdGEncyBzdHJ1Y3R1cmUgaW4gaXRzIHJlcy5zZW5kKHRydWUpXG4gICAgfSlcbiAgICAudGhlbigoZGF0YSkgPT4geyBcbiAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICBsZXQgdGVtcFN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICAgIHRlbXBTdGF0ZS5hY3RpdmVTZXNzaW9uID0gZGF0YS5zdGF0dXM7XG4gICAgICB0aGlzLnNldFN0YXRlKHRlbXBTdGF0ZSk7XG4gICAgfSlcbiAgICAuY2F0Y2goZSA9PiBcbiAgICAgIGNvbnNvbGUubG9nKGUpKVxuICB9XG5cblxuICBoYW5kbGVDbGljayhldmVudCkgeyAgICBcbiAgICBjb25zdCB1c2VybmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyLWlucHV0JykudmFsdWU7XG4gICAgY29uc3QgcGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQtaW5wdXQnKS52YWx1ZTtcbiAgICBjb25zb2xlLmxvZygndXNlcm5hbWU6ICcgKyB1c2VybmFtZSArICcuLi4uLi4gcGFzc3dvcmQ6ICcgKyBwYXNzd29yZClcbiAgICBcbiAgICBpZiAoIXVzZXJuYW1lIHx8ICFwYXNzd29yZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyLWlucHV0JykudmFsdWUgPSBudWxsO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZC1pbnB1dCcpLnZhbHVlID0gbnVsbDtcblxuICAgIGNvbnN0IHJvdXRlID0gKGV2ZW50LnRhcmdldC5pZCA9PT0gJ2xvZy1pbicgPyAnL2xvZ2luJyA6ICcvc2lnbnVwJyk7XG4gICAgY29uc29sZS5sb2cocm91dGUpXG5cblxuICAgIGZldGNoKHJvdXRlLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7dXNlcm5hbWU6IHVzZXJuYW1lLCBwYXNzd29yZDogcGFzc3dvcmR9KVxuICAgIH0pXG4gICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKHJlcy5zdGF0dXMgPCAzMDAgJiYgcmVzLnN0YXR1cyA+PSAyMDApIHJldHVybiByZXMuanNvbigpO1xuICAgIH0pXG4gICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgaWYgKHJlcy5tZXNzYWdlKSByZXR1cm4gY29uc29sZS5sb2cocmVzLm1lc3NhZ2UpO1xuICAgICAgbGV0IGN1cnJlbnRTdGF0ZSA9IE9iamVjdC5hc3NpZ24odGhpcy5zdGF0ZSk7IFxuICAgICAgLy8gIGRvZXMgbm90IGNvcHkgbWVtb3J5IGFkZHJlc3MgYnV0IGRhdGFcbiAgICAgIC8vIGN1cnJlbnRTdGF0ZS51c2VyRGF0YSA9IHJlczsgICAgLy8gdGhpcyByZXMgKHJlc3BvbnNlKSBmcm9tIHZlcmlmeXVzZXIgaGFzIGFsbCB0aGUgaW5mbyBvZiB0aGUgdXNlclxuICAgICAgaWYgKHJlcy5hY3RpdmVTZXNzaW9uKSBjdXJyZW50U3RhdGUuYWN0aXZlU2Vzc2lvbiA9IHRydWU7XG4gICAgICAvKmlmIChyZXMpKi8gdGhpcy5zZXRTdGF0ZShjdXJyZW50U3RhdGUpO1xuICAgIH0pO1xuICB9XG5cblxuICAvLyBjaGVjayB3ZXRoZXIgdGhlcmUgaXMgY29va2llIGluIHRoZSBicm93c2VyIG9yIG5vdC5cbiAgLy8gaWYgbm90LCByZW5kZXIgTG9naW47IGlmIHRydWUsIHJlbmRlciBVc2VyTWFpblxuICBjb21wb25lbnREaWRNb3VudCgpIHsgXG4gICAgZmV0Y2goJy92ZXJpZnknLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9XG4gICAgfSlcbiAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAocmVzLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgIHJldHVybiBcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXMuanNvbigpIC8vIHNlc3Npb25Db250cm9sbGVyLnZlcmlmeVVzZXIgZGVmaW5lcyBkYXRhJ3Mgc3RydWN0dXJlIGluIGl0cyByZXMuc2VuZCh0cnVlKVxuICAgIH0pXG4gICAgLnRoZW4oKGRhdGEpID0+IHsgXG4gICAgICBsZXQgdGVtcFN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICAgIHRlbXBTdGF0ZS5hY3RpdmVTZXNzID0gZGF0YS5zdGF0dXM7XG4gICAgICB0aGlzLnNldFN0YXRlKHRlbXBTdGF0ZSk7XG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHsgICAgICBcbiAgICByZXR1cm4gKFxuICAgICAgLy8gdGhpcy5zdGF0ZS5hY3RpdmVTZXMgPyA8VXNlck1haW4gdXNlckRhdGE9e3RoaXMuc3RhdGUudXNlckRhdGF9XG4gICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRHcm91cCA9e3RoaXMuYWRkR3JvdXB9IFxuICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkSXRlbT17dGhpcy5hZGRJdGVtfSBcbiAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUl0ZW09e3RoaXMuZGVsZXRlSXRlbX0gXG4gICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWF2ZUdyb3VwPXt0aGlzLmxlYXZlR3JvdXB9Lz4gOiBcbiAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2dpbiBoYW5kbGVDbGljaz17dGhpcy5oYW5kbGVDbGlja30gLz4gXG4gICAgICB0aGlzLnN0YXRlLmFjdGl2ZVNlc3Npb24gPyA8TWFpblBhZ2UgYWRkR3JvdXA9e3RoaXMuYWRkR3JvdXB9IC8+IDogPExvZ2luIGhhbmRsZUNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfS8+XG4gICAgKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFwcFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9BcHAuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcblxuLy8gUHJlc2VudGF0aW9uIGNvbXBvbmVudCBmdW5jdGlvblxuY29uc3QgTG9naW4gPSAocHJvcHMpID0+IHtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9J3NpZ24nPlxuICAgICAgPGgyPkdyb3VwdXI8L2gyPlxuICAgICAgPGgzPkpvaW4gb3RoZXIgYnV5ZXJzIGZvciBzYXZpbmc8L2gzPlxuICAgICAgPHVsIGlkPSdzaWduSW5mbyc+XG4gICAgICAgIDxsaT48aW5wdXQgY2xhc3NOYW1lPSdpbnB1dEJveCcgaWQ9J3VzZXItaW5wdXQnIHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdVc2VybmFtZScvPjwvbGk+XG4gICAgICAgIDxsaT48aW5wdXQgY2xhc3NOYW1lPSdpbnB1dEJveCcgaWQ9J3Bhc3N3b3JkLWlucHV0JyB0eXBlPSdwYXNzd29yZCcgcGxhY2Vob2xkZXI9J1Bhc3N3b3JkJy8+PC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8dWwgaWQ9J3NpZ25CdXR0b25zJz5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdzaWduQm94JyBpZD0nbG9nLWluJyB0eXBlPSdzdWJtaXQnIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZUNsaWNrfT5cbiAgICAgICAgICAgIExvZyBpblxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3NpZ25Cb3gnIGlkPSdzaWduLWluJyB0eXBlPSdzdWJtaXQnIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZUNsaWNrfT5cbiAgICAgICAgICAgIFNpZ24gdXBcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMb2dpblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9Mb2dpbi5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xuXG4vLyBwcm9wcyBiZWluZyBwYXNzZWQgZG93biBmcm9tIHBhcmVudC4gXG4vLyBpbmZvcm1hdGlvbiBpcyBiZWluZyBzYXZlZCBvbiB0aGUgY2xpZW50IHNpZGUgY3VycmVudGx5LiBOb3RoaW5nIGlzIGJlaW5nIHBhc3NlZCBmcm9tIHNlcnZlci4gXG5cbmNvbnN0IE1haW5QYWdlID0gKHByb3BzKSA9PiB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgLy8gaW5pdGlhbCBoZWFkZXJcbiAgICAgIDxkaXYgaWQ9J3VzZXJNYWluJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hlYWRlcic+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT0nbGlzdCcgaWQ9J2hlYWRlckxpc3QnPlxuICAgICAgICAgICAgPGxpPjxoMz4gR3JvdXB1ciA8L2gzPjwvbGk+XG4gICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPSdpY29uJyBocmVmPScvcHJvZmlsZSc+PGltZyBzcmM9J2NsaWVudC9pY29ucy9wcm9maWxlLnBuZycvPjwvYT48L2xpPlxuICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT0naWNvbicgaHJlZj0nLyc+PGltZyBzcmM9J2NsaWVudC9pY29ucy9sb2dvdXQucG5nJy8+PC9hPjwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21haW4nPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd1c2VyTWFpbic+XG4gICAgICAgICAgICA8aDM+IFlvdXIgR3JvdXBzIDwvaDM+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZnJhbWUnPlxuICAgICAgICAgICAgICA8dWwgaWQ9J3VzZXJHcm91cExpc3QnPlxuICAgICAgICAgICAgICAgIDxsaT4gICAgICAgICAgXG4gICAgICAgICAgICAgICAgeyAvKiBcbiAgICAgICAgICAgICAgICAgIHBhc3MgZG93biBhY3Rpb24gZnJvbSBhcHAuIFVwZGF0ZSB0aGUgc3RhdGUgYW5kIHJlZnJlc2hcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5IGFuZCBsaXN0IGRhdGEgZnJvbSBkYXRhYmFzZS4gT24gZWFjaCBncm91cCwgYWRkIGEgYnV0dG9uIHRoYXQgYWxsb3dzIGZvciBkZWxldGlvbi4gXG4gICAgICAgICAgICAgICAgICBXaGVuIGJ1dHRvbiBpcyBwcmVzc2VkLCBkZWxldGUgdGhlIGdyb3VwIGZyb20gdGhlIGRhdGFiYXNlLiBVcGRhdGUgdGhlIGRpc3BsYXllZCBncm91cCB1bmRlciB5b3VyIGdyb3VwLiBcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8Zm9ybSBvbkNsaWNrPXtwcm9wcy5hZGRHcm91cH0+IFxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD0nR3JvdXAnIHR5cGU9J3RleHQnIG5hbWU9J0dyb3VwSW5wdXQnIHBsYWNlaG9sZGVyPSdFbnRlciBuYW1lIGhlcmUnLz4gXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3N1Ym1pdCcvPiBcbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncm91cHNNYWluJz5cbiAgICAgICAgICAgIDxoMz4gR3JvdXBzIEF2YWlsYWJsZSA8L2gzPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZyYW1lJz5cbiAgICAgICAgICAgICAgPHVsIGlkPSdncm91cHNMaXN0Jz5cbiAgICAgICAgICAgICAgICA8bGk+PGJ1dHRvbiBjbGFzc05hbWU9J3VzZXJHcm91cCcgaHJlZj0nIyc+e3Byb3BzLmFsbEdyb3Vwc308L2J1dHRvbj48L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgXG5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0gIFxuXG4gLy8gZm91ciBkaXZzLiBUaGVyZSBpcyBhIG1haW4gZGl2IHdpdGggdGhyZWUgbmVzdGVkIGNoaWxkcmVuICh5b3VyIGdyb3VwcyAvIGdyb3VwcyBhdmFpbGFibGUgLyBmb290ZXIpXG4gLy8gZWFjaCBkaXYgaGFzIGFkZGl0aW9uYWwgbmVzdGluZy4uIC1fLS4gIFxuXG5tb2R1bGUuZXhwb3J0cyA9IE1haW5QYWdlXG5cbiAvLyA8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTEyIGZvb3Rlcic+XG4gLy8gICAgICAgICAgPHVsIGNsYXNzTmFtZT0nbGlzdCcgaWQ9J2Zvb3Rlckxpc3QnPlxuIC8vICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT0nbGlzdCcgaHJlZj0nIyc+QUJPVVQgVVM8L2E+PC9saT5cbiAvLyAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9J2xpc3QnIGhyZWY9JyMnPlNVUFBPUlQ8L2E+PC9saT5cbiAvLyAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9J2xpc3QnIGhyZWY9JyMnPkJMT0c8L2E+PC9saT5cbiAvLyAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9J2xpc3QnIGhyZWY9JyMnPkpPQlM8L2E+PC9saT5cbiAvLyAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9J2xpc3QnIGhyZWY9JyMnPlBSSVZBQ1k8L2E+PC9saT5cbiAvLyAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9J2xpc3QnIGhyZWY9JyMnPlRFUk1TPC9hPjwvbGk+XG4gLy8gICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPSdsaXN0JyBocmVmPScjJz5ESVJFQ1RPUlk8L2E+PC9saT5cbiAvLyAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9J2xpc3QnIGhyZWY9JyMnPkxBTkdVQUdFPC9hPjwvbGk+XG4gLy8gICAgICAgICAgPC91bD5cbiAvLyAgICAgICAgPC9kaXY+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L01haW5QYWdlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==