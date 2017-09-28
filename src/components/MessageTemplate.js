import React, { Component } from 'react'
import { connect } from 'react-redux'
import SortableMessageComponent from './SortableMessageComponents/SortableMessageComponent'
import iphone7_white from '../images/iphone7_white.jpg'
import girl_1 from '../images/pexels-photo-2.jpeg'
import arrow from '../images/arrow.png'
import flag from '../images/flag.png'
import '../css/message-template.css'

class MessageTemplate extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    const matchName = this.props.value.matchName
    const profileImage = this.props.profileImage

    return (
      <div className="phone-container">
        <img src={iphone7_white} className="phone-image" role="presentation" alt="phone" />
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
            <img src={arrow} className="tinder-chevron" alt="chevron"/>
            <div className="phone-tinder-nav_profile">
              <img src={profileImage || girl_1} className="img-circle img-responsive phone-tinder-nav_profile-img" alt="profile" />
              <div className="phone-tinder-nav_profile-name">{matchName || "my name"}</div>
            </div>
            <img src={flag} className="tinder-flag" alt="flag" />
          </div>
          <SortableMessageComponent className="phone-inner-message-container"/>
          <div className="phone-send-message-container">
            <div className="phone-send-message_gif">
              <div className="phone-send-message_gif-icon">
                <span>GIF</span>
              </div>
            </div>
            <div className="phone-send-message-input-container">
              <div className="phone-send-message_text-input">
                <span>Type a message</span>
              </div>
              <div className="phone-send-message_send-btn">
                <span>SEND</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  profileImage: state.profileImage
})

export default connect(mapStateToProps)(MessageTemplate)
