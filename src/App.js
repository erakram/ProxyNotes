import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import firebase from './config/fbConfig';

class App extends Component {
  state = {
    authenticated: false,
  };
  componentDidMount() {
    firebase.auth().onAuthStateChanged((authenticated) => {
      authenticated ? this.setState(() => ({
            authenticated: true,
          })): this.setState(() => ({
            authenticated: false,
          }));
    });
  }
  render () {
    return (
      <div>
        <Navigation authenticated={this.state.authenticated} />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div>
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//       <Navigation authenticated={this.state.authenticated} />
//     </div>
//   );
// }

export default App;
