import React, { Component } from 'react'
import OSComponent from './OS'
import MatchName from './MatchName'
import MatchImage from './MatchImage'

class Home extends Component {
  constructor(props) {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  componentWillMount() {
    this.setState({
      OSType: "",
      matchImage: "",
      matchName: "",
      phoneBatteryPercent: "",
      phoneSignalStrength: "",
      phoneServiceProvider: "",
      messages: []
    })
  }

  handleChange(event) {
    console.log(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log('submit event', event, event.target);
  }

  render() {
    return (
      <div className="row container">
        <div>cooool</div>
        <form onSubmit={this.handleSubmit}>
          <OSComponent onChange={this.handleChange} />
          <MatchName onChange={this.handleChange} />
          <MatchImage onChange={this.handleChange} />
          <button
            type="submit"
            className="btn btn-default">
            Add Message
          </button>
        </form>
      </div>
    )
  }
}

export default Home;
