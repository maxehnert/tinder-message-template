import React from 'react'

const Message = (props) => {
  return (
    <div>
      <div className="form-group">
        <label htmlFor="matchName" className="col-sm-12 control-label">Message</label>
        <textarea
          className="form-control"
          rows="3"
          name="messageContents"
          placeholder="Enter Your Message"
          required
          value={props.value.messageContents}
          onChange={props.onChange} />
      </div>
      <div className="form-group">
        <div className="form-check">
          <label className="col-sm-12 control-label">Message Sender / Receiver</label>
          <label className="custom-control custom-radio">
            <input
              type="radio"
              className="custom-control-input"
              name="messageSenderReceiver"
              id="MSR1"
              required
              value="to"
              onChange={props.onChange} />
            <span className="custom-control-indicator"></span>
            <span className="custom-control-description">To</span>
          </label>
          <label className="custom-control custom-radio">
            <input
              type="radio"
              className="custom-control-input"
              name="messageSenderReceiver"
              id="MSR1"
              required
              value="from"
              onChange={props.onChange} />
            <span className="custom-control-indicator"></span>
            <span className="custom-control-description">From</span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default Message
