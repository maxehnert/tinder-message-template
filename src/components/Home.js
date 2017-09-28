import React, { Component } from 'react'
import { connect } from 'react-redux'
import html2canvas from 'html2canvas'
// eslint-disable-next-line
import rasterizehtml from 'rasterizehtml'
// eslint-disable-next-line
import OSComponent from './OS'
import MatchName from './MatchName'
import MatchImage from './MatchImage'
import Message from './Message'
import MessageTemplate from './MessageTemplate'
import { profileImage, addMessage } from '../actions'

import girl_1 from '../images/pexels-photo-2.jpeg'


class Home extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.renderImage = this.renderImage.bind(this)
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
    // console.log(event.target.name,event.target.value);
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

    this.props.dispatch(addMessage(this.messageConstructor))
    this.props.dispatch(profileImage(matchImage))

    this.messageConstructor = {};

// console.log('state', this.state);
// console.log('messageConstructor', this.messageConstructor);
  }

  renderImage(event) {
    const messageList = document.querySelector('.phone-inner-container')
    // var canvas = document.getElementById("canvas");
    // rasterizeHTML.drawHTML(messageList, canvas)
    html2canvas(messageList).then(function(canvas) {
      document.body.appendChild(canvas);
    });
  }

  render() {
    return (
      <div className="row container">
        <form className="col-sm-12 col-md-4 message-form" onSubmit={this.handleSubmit}>
          {/* <OSComponent onChange={this.handleChange} /> */}
          <MatchName value={this.state} onChange={this.handleChange} />
          <MatchImage value={this.state} onChange={this.handleChange} />
          <Message value={this.state} onChange={this.handleChange} />
          <button
            type="submit"
            className="btn btn-success">
            Add Message
          </button>
        </form>
        <button onClick={this.renderImage}>Make Image</button>
        <div className="col-sm-12 col-md-6">
          <MessageTemplate value={this.state} />
        </div>
        <canvas id="canvas"></canvas>
      </div>
    )
  }
}

Home = connect()(Home)

export default Home;
