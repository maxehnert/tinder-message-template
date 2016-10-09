import React, { Component } from 'react'
import { connect } from 'react-redux'
import SortableComponent from './SortableComponent'
import iphone7_white from '../images/iphone7_white.jpg'
import girl_1 from '../images/pexels-photo-2.jpeg'
import '../css/message-template.css'

class MessageTemplate extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const matchName = this.props.value.matchName
    const profileImage = this.props.profileImage

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
              <img src={profileImage || girl_1} className="img-circle img-responsive phone-tinder-nav_profile-img" />
              <div className="phone-tinder-nav_profile-name">{matchName || "my name"}</div>
            </div>
            <div className="phone-tinder-nav_dots">
              <i className="fa fa-circle" aria-hidden="true"></i>
              <i className="fa fa-circle" aria-hidden="true"></i>
              <i className="fa fa-circle" aria-hidden="true"></i>
            </div>
          </div>
          {/* <div className="phone-inner-message-container"> */}
          {/* <SortableComponent messages={this.props} className="phone-inner-message-container"/> */}
          <SortableComponent className="phone-inner-message-container"/>
          {/* <div className="phone-inner-message_match-header"></div> */}
          {/* </div> */}
          <div className="phone-send-message-container">
            <div className="phone-send-message_gif">
              <div className="phone-send-message_gif-icon">
                <span>GIF</span>
              </div>
            </div>
            <div className="phone-send-message_text-input">
              <span>Type A Message...</span>
            </div>
            <div className="phone-send-message_send-btn">
              <span>SEND</span>
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
