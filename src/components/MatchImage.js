import React from 'react'
import girl_1 from '../images/pexels-photo-2.jpeg'

const MatchImage = (props) => {
  return (
    <div className="form-group">
      <label htmlFor="matchImageSelect">Select Match Image</label>
      <select id="matchImageSelect" className="form-control" name="matchImage" defaultValue={girl_1} onChange={props.onChange}>
        <option value={girl_1}>
          girl 1
        </option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>


      <div className="btn-group">
        <button className="btn btn-default btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Small button <span className="caret"></span>
        </button>
        <ul className="dropdown-menu">
          <li><a href="#">Action</a></li>
          <li><a href="#">Another action</a></li>
          <li><a href="#">Something else here</a></li>
          <li role="separator" className="divider"></li>
          <li><a href="#">Separated link</a></li>
        </ul>
      </div>
    </div>
  )
}

export default MatchImage
