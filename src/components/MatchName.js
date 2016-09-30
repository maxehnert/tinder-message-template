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
            placeholder="Match Name"
            name="matchName"
            onChange={props.onChange} />
        </div>
        </div>
    </div>
  )
}

export default MatchName
