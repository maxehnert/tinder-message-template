import React, { Component } from 'react'
import OSComponent from './OS'
import MatchName from './MatchName'
import MatchImage from './MatchImage'
import Message from './Message'
import MessageTemplate from './MessageTemplate'

class Home extends Component {
  constructor(props) {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.messageConstructor = {}
  }

  componentWillMount() {
    this.setState({
      // OSType: "",
      // matchImage: "",
      // matchName: "",
      // phoneBatteryPercent: "",
      // phoneSignalStrength: "",
      // phoneServiceProvider: "",
      messages: []
    })
  }

  handleChange(event) {
    console.log(event.target.name,event.target.value);
    // this.setState({
    //   [event.target.name]: event.target.value
    // })
    this.messageConstructor[event.target.name] = event.target.value
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log('submit event', event, event.target);

    this.state.messages.push(this.messageConstructor)
    var newMsgArr = this.state.messages
    this.setState({messages: newMsgArr})
    this.messageConstructor = {};

// console.log('state', this.state);
// console.log('messageConstructor', this.messageConstructor);
  }

  render() {
    return (
      <div className="row container">
        <div>cooool</div>
        <form className="col-sm-12 col-md-6" onSubmit={this.handleSubmit}>
          <OSComponent onChange={this.handleChange} />
          <MatchName onChange={this.handleChange} />
          <MatchImage onChange={this.handleChange} />
          <Message />
          <button
            type="submit"
            className="btn btn-default">
            Add Message
          </button>
        </form>
        <div className="col-sm-12 col-md-6">
          <MessageTemplate messagesObj={this.state} />
        </div>
      </div>
    )
  }
}

export default Home;
