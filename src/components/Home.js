import React, { Component } from 'react'
import OSComponent from './OS'
import MatchName from './MatchName'
import MatchImage from './MatchImage'
import Message from './Message'
import MessageTemplate from './MessageTemplate'

import girl_1 from '../images/pexels-photo-2.jpeg'


class Home extends Component {
  constructor(props) {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.messageConstructor = {}
  }

  componentWillMount() {
    this.setState({
      OSType: "",
      matchImage: girl_1,
      matchName: "",
      messageContents: "",
      phoneBatteryPercent: "",
      phoneSignalStrength: "",
      phoneServiceProvider: "",
      messageSenderReceiver: "",
      messages: []
    })
  }

  handleChange(event) {
    console.log(event.target.name,event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    })
    this.messageConstructor[event.target.name] = event.target.value
  }

  handleSubmit(event) {
    event.preventDefault()
    // console.log('submit event', event, event.target);
    var matchImage = !this.messageConstructor.matchImage ? this.state.matchImage : this.messageConstructor.matchImage
    var messageSenderReceiver = !this.messageConstructor.messageSenderReceiver ? this.state.messageSenderReceiver : this.messageConstructor.messageSenderReceiver
    this.messageConstructor.matchImage = matchImage
    this.messageConstructor.messageSenderReceiver = messageSenderReceiver

    this.state.messages.push(this.messageConstructor)
    var newMsgArr = this.state.messages

    this.setState({
      // OSType: "",
      matchImage: matchImage,
      // matchName: "",
      messageContents: "",
      // phoneBatteryPercent: "",
      // phoneSignalStrength: "",
      // phoneServiceProvider: "",
      messages: newMsgArr
    })

    this.messageConstructor = {};

// console.log('state', this.state);
// console.log('messageConstructor', this.messageConstructor);
  }

  render() {
    return (
      <div className="row container">
        <form className="col-sm-12 col-md-6" onSubmit={this.handleSubmit}>
          <OSComponent onChange={this.handleChange} />
          <MatchName value={this.state} onChange={this.handleChange} />
          <MatchImage value={this.state} onChange={this.handleChange} />
          <Message value={this.state} onChange={this.handleChange} />
          <button
            type="submit"
            className="btn btn-default">
            Add Message
          </button>
        </form>
        <div className="col-sm-12 col-md-6">
          <MessageTemplate value={this.state} />
        </div>
      </div>
    )
  }
}

export default Home;
