import React from 'react'

const OSComponent = (props) => {
  return (
    <div className="form-group">
      <label className="col-sm-12 control-label">
        OS Type
      </label>
      <label className="radio-inline">
        <input type="radio" name="OSType" id="OSRadio1" value="android" onChange={props.onChange} /> Android
      </label>
      <label className="radio-inline">
        <input type="radio" name="OSType" id="OSRadio2" value="ios" onChange={props.onChange} /> IOS
      </label>
    </div>
  )
}

export default OSComponent
