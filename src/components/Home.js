import React, { Component } from 'react'
import { connect } from 'react-redux'
import ImageModal from './ImageModal'
import MatchImage from './MatchImage'
import MatchImageUploader from './MatchImageUploader'
import MatchName from './MatchName'
import Message from './Message'
import MessageTemplate from './MessageTemplate'
// import OSComponent from './OS'
import StatusBar from './StatusBar'
import { profileImage, addMessage, phoneStatus } from '../actions'
import {PanelGroup, Panel} from 'react-bootstrap'
import girl_1 from '../images/pexels-photo-2.jpeg'

class Home extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handlePhoneStatusChange = this.handlePhoneStatusChange.bind(this)
    this.onFileChange = this.onFileChange.bind(this)
    this.messageConstructor = {}
    this.phoneStatusConstructor = {}
  }

  componentWillMount() {
    this.setState({
      OSType: "",
      matchImage: girl_1,
      matchName: "",
      messageContents: "",
      messageSenderReceiver: "",
      messages: [],
      phoneBatteryPercent: "78",
      phoneServiceProvider: "AT&T",
      phoneTime: "7:43",
      AmPm: "PM"
    })
  }

  handleChange(event) {
    // console.log(event.target.name, event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    })
    this.messageConstructor[event.target.name] = event.target.value
  }

  handlePhoneStatusChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
    this.phoneStatusConstructor[event.target.name] = event.target.value
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
    const matchImage = !whichMatchImage ? this.state.matchImage : whichMatchImage
    const messageSenderReceiver = !this.messageConstructor.messageSenderReceiver ? this.state.messageSenderReceiver : this.messageConstructor.messageSenderReceiver
    this.messageConstructor.matchImage = matchImage
    this.messageConstructor.messageSenderReceiver = messageSenderReceiver
    this.state.messages.push(this.messageConstructor)
    const newMsgArr = this.state.messages

    const phoneServiceProvider = this.phoneStatusConstructor.phoneServiceProvider || this.state.phoneServiceProvider
    const phoneTime = this.phoneStatusConstructor.phoneTime || this.state.phoneTime
    const AmPm = this.phoneStatusConstructor.AmPm || this.state.AmPm
    const phoneBatteryPercent = this.phoneStatusConstructor.phoneBatteryPercent || this.state.phoneBatteryPercent
    
    this.setState({
      // OSType: "",
      matchImage,
      // matchName: "",
      messageContents: "",
      phoneBatteryPercent,
      phoneServiceProvider,
      phoneTime,
      AmPm,
      messages: newMsgArr
    })

    this.props.dispatch(addMessage(this.messageConstructor))
    this.props.dispatch(profileImage(matchImage))
    this.props.dispatch(phoneStatus(this.phoneStatusConstructor))

    this.messageConstructor = {};
    this.phoneStatusConstructor = {};

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
              <PanelGroup>
              <Panel collapsible header="Create Message" eventKey="1">
                <MatchName value={this.state} onChange={this.handleChange} />
                <Message value={this.state} onChange={this.handleChange} />
              </Panel>
              <Panel collapsible header="Add Image" eventKey="2">
                <MatchImageUploader value={this.state} onChange={this.onFileChange} />
                <MatchImage value={this.state} onChange={this.handleChange} />
              </Panel>
              <Panel collapsible header="Change Phone Status" eventKey="3">
                <StatusBar value={this.state} onChange={this.handlePhoneStatusChange} />
              </Panel>
              </PanelGroup>
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
