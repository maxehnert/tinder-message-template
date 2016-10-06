import React, { Component } from 'react'
import Home from './Home'
import '../css/App.css';

class App extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div className="App">
        <Home /> {/* added the Home component here while I have the router disabled*/}
        {this.props.children}
      </div>
    );
  }
}

export default App;
