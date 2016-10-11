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
        <label htmlFor="pasteImage" className="col-sm-12 control-label">Add Image</label>
        <div className="">
          <input type="text" className="form-control" id="pasteImage" placeholder="Paste URL Here" />
        </div>
      </div>
      <div className="form-group">
        <label className="col-sm-12 control-label">Message Sender / Receiver</label>
        <label className="radio-inline">
          <input
            type="radio"
            name="messageSenderReceiver"
            id="MSR1"
            required
            value="to"
            onChange={props.onChange} />
          To
        </label>
        <label className="radio-inline">
          <input
            type="radio"
            name="messageSenderReceiver"
            id="MSR1"
            required
            value="from"
            onChange={props.onChange} />
          From
        </label>
      </div>
    </div>
  )
}

export default Message
