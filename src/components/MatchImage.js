import React from 'react'

const MatchImage = (props) => {
  return (
    <div className="form-group">
      <label htmlFor="matchImageSelect">Select Match Image</label>
      <select id="matchImageSelect" className="form-control" name="matchImage" onChange={props.onChange}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
  )
}

export default MatchImage
