import React, { Component } from 'react'
import SortableComponent from './SortableComponent'
import iphone7_white from '../images/iphone7_white.jpg'
import face_pic from '../images/pexels-photo-2.jpeg'
import '../css/message-template.css'

class MessageTemplate extends Component {
  constructor(props) {
    super(props)
    console.log(this.props);
  }

  render() {
    console.log('messagetemplate render props', ...this.props);
    return (
      <div className="phone-container">
        <img src={iphone7_white} className="phone-image"/>
        <div className="phone-inner-container">
          <div className="phone-status-bar">
            <div className="phone-status-bar_service">
              <i className="fa fa-circle service-circle-sm" aria-hidden="true"></i>
              <i className="fa fa-circle service-circle-sm" aria-hidden="true"></i>
              <i className="fa fa-circle-thin service-circle-sm" aria-hidden="true"></i>
              <i className="fa fa-circle-thin service-circle-sm" aria-hidden="true"></i>
              <i className="fa fa-circle-thin service-circle-sm" aria-hidden="true"></i>
              <div className="phone-status-bar_provider">AT&T</div>
              <i className="fa fa-wifi" aria-hidden="true"></i>
            </div>
            <div className="phone-status-bar_time">
              2:46 PM
            </div>
            <div className="phone-status-bar_battery">
              <i className="fa fa-location-arrow" aria-hidden="true"></i>
              <div className="phone-status-bar_battery_percent">78%</div>
              <i className="fa fa-battery-three-quarters" aria-hidden="true"></i>
            </div>
          </div>
          <div className="phone-tinder-nav">
            <div className="phone-tinder-nav_caret">
              <span className="tinder-chevron"></span>
            </div>
            <div className="phone-tinder-nav_profile">
              <img src={face_pic} className="img-circle img-responsive phone-tinder-nav_profile-img" />
              <div className="phone-tinder-nav_profile-name">my Name</div>
            </div>
            <div className="phone-tinder-nav_dots">
              <i className="fa fa-circle" aria-hidden="true"></i>
              <i className="fa fa-circle" aria-hidden="true"></i>
              <i className="fa fa-circle" aria-hidden="true"></i>
            </div>
          </div>
          <div className="phone-inner-message-container">
            <SortableComponent messages={this.props.messagesObj}/>
            <div className="phone-inner-message_match-header"></div>
          </div>
          <div className="phone-send-message-container">
            <div className="phone-send-message_gif"></div>
            <div className="phone-send-message_text-input"></div>
            <div className="phone-send-message_send-btn"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default MessageTemplate
