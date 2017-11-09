import React from 'react'
import {FormGroup, Radio} from 'react-bootstrap'
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
          <FormGroup>
            <Radio
              name="messageSenderReceiver"
              inline
              required
              value="to"
              onChange={props.onChange}
              >
              To
            </Radio>
            {' '}
            <Radio
              name="messageSenderReceiver"
              inline
              required
              value="from"
              onChange={props.onChange}
              >
              From
            </Radio>
          </FormGroup>
        </div>
      </div>
    </div>
  )
}

export default Message
