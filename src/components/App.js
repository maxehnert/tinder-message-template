import React, { Component } from 'react'
import '../css/App.css';

class App extends Component {
  constructor(props) {
    super()

  }
  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

export default App;
