import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
class App extends Component
{
    state = {
        greeting: "Hi!"
    };

    componentDidMount(){
        this.setGreeting();
    }

    async setGreeting(){
        const response = await axios.get('/api/hello');
        this.setState({greeting: response.data});
    }

    render (){
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
            { this.state.greeting}
            </a>
          </header>
        </div>
      );
    }
}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello, World!!
        </a>
      </header>
    </div>
  );
}
*/
export default App;
