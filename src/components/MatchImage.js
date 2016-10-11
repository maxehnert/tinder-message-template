import React from 'react'
import girl_1 from '../images/pexels-photo-2.jpeg'
import girl_2 from '../images/girl-2.jpeg'
import guy_1 from '../images/guy-1.jpeg'
import guy_2 from '../images/guy-2.jpg'

const MatchImage = (props) => {
  return (
    <div className="form-group">
      <label htmlFor="matchImageSelect" className="col-sm-12 control-label">Select Match Image</label>
      <select id="matchImageSelect" className="form-control" name="matchImage" defaultValue={girl_1} onChange={props.onChange}>
        <option value={girl_1}> girl 1 </option>
        <option value={girl_2}>girl 2</option>
        <option value={guy_1}>guy 1</option>
        <option value={guy_2}>guy 2</option>
      </select>
    </div>
  )
}

export default MatchImage
