import React from 'react'

const MatchImageUploader = (props) => {
  return (
    <div>
      <div className="form-group">
       <label htmlFor="pasteImage" className="col-sm-12 control-label">Add a Match Image</label>
        <div className="match-image-uploader">
          <input type="text" className="form-control" id="pasteImage" name="matchImageUploader" placeholder="Paste URL Here" onChange={props.onChange}/>
          <input type="file" id="fileElem" accept="image/*" name="matchImageUploader" style={{display:'none'}} onChange={props.onChange}/>
          <label htmlFor="fileElem" className="match-image-uploader_link">Click to Upload an Image Instead</label>
        </div>
        <div className="upload-image-preview"><img /></div>
      </div>
    </div>
  )
}

export default MatchImageUploader