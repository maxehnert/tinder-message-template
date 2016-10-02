import React from 'react';

const MatchName = (props) => {
  return (
    <div>
      <div className="form-group">
        <label htmlFor="matchName" className="col-sm-2 control-label">Name</label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="matchName"
            placeholder="Your Match's Name"
            name="matchName"
            maxLength="18"
            required
            value={props.value.matchName}
            onChange={props.onChange} />
        </div>
      </div>
    </div>
  )
}

export default MatchName
