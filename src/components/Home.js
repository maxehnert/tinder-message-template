import React, { Component } from 'react'
import { connect } from 'react-redux'
import html2canvas from 'html2canvas'
// eslint-disable-next-line
import OSComponent from './OS'
import MatchName from './MatchName'
import MatchImage from './MatchImage'
import Message from './Message'
import MessageTemplate from './MessageTemplate'
import ImageModal from './ImageModal'
import MatchImageUploader from './MatchImageUploader'
import { profileImage, addMessage } from '../actions'

import girl_1 from '../images/pexels-photo-2.jpeg'


class Home extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.onFileChange = this.onFileChange.bind(this)
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
    console.log(event.target.name, event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    })
    this.messageConstructor[event.target.name] = event.target.value
  }

  onFileChange(event) {
    const imageType = /^image\//
    let file;

    if (event.target.files && imageType.test(event.target.files[0].type)) {
      file = window.URL.createObjectURL(event.target.files[0])
    } else {
      file = event.target.value
    }

    this.setState({
      [event.target.name]: file
    })
    this.messageConstructor[event.target.name] = file

    const imgPreview = document.querySelector('.upload-image-preview')
    const img = imgPreview.firstElementChild

    img.src = file
    img.style.display = 'initial'
  }

  handleSubmit(event) {
    event.preventDefault()
    // console.log('submit event', event, event.target);
    const whichMatchImage = this.messageConstructor.matchImageUploader || this.messageConstructor.matchImage
    var matchImage = !whichMatchImage ? this.state.matchImage : whichMatchImage
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

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-4 no-gutters">
            <form className="message-form" onSubmit={this.handleSubmit}>
              {/* <OSComponent onChange={this.handleChange} /> */}
              <MatchName value={this.state} onChange={this.handleChange} />
              <Message value={this.state} onChange={this.handleChange} />
              <MatchImageUploader value={this.state} onChange={this.onFileChange} />
              <MatchImage value={this.state} onChange={this.handleChange} />
              <button
                type="submit"
                className="btn btn-success">
                Add Message
              </button>
            </form>
            </div>
            {/** <div className="col-sm-12 col-md-6 no-gutters">
          </div>**/}
            <div className="col-sm-12 col-md-8 no-gutters phone-and-img-gen-container">
              <div>
                <ImageModal {...this.props} />
              </div>
              <MessageTemplate value={this.state} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Home = connect()(Home)

export default Home;
