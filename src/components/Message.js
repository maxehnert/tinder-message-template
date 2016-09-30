import React from 'react'

const Message = (props) => {
  return (
    <div>
      <div className="form-group">
        <label htmlFor="matchName" className="col-sm-2 control-label">Message</label>
        <textarea className="form-control" rows="3"></textarea>
      </div>
      <div className="form-group">
        <label for="pasteImage" class="col-sm-2 control-label">Add Image</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="pasteImage" placeholder="Paste URL Here" />
        </div>
      </div>
      <div className="form-group">
        <label className="radio-inline">
          <input type="radio" name="messageSenderReceiver" id="MSR1" value="to" onChange={props.onChange} /> To
        </label>
        <label className="radio-inline">
          <input type="radio" name="messageSenderReceiver" id="MSR1" value="from" onChange={props.onChange} /> From
        </label>
      </div>
    </div>
  )
}

export default Message
