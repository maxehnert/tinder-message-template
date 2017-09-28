import React from 'react'
import { SortableElement } from 'react-sortable-hoc';

const SortableMessageItem = SortableElement(({value, profileImage, onDelete, index, showHeart, showSent}) => {
  const { messageContents, messageSenderReceiver } = value
  return (
    <li className={messageSenderReceiver === 'to' ? "message-list-item message-list-item_from" : "message-list-item"}>
      {messageSenderReceiver === 'from' ? <img src={profileImage} className="img-circle message-list-item_img" alt="profile" /> : null}
      <div className={messageSenderReceiver === 'from' ? 'message-list-item-inner message-list-item-inner_from' : 'message-list-item-inner message-list-item-inner_to' }>
        {messageContents}
      </div>
      {showHeart ?
        <div className="heart-icon-container">
          <i className="fa fa-heart-o" aria-hidden="true"></i>
        </div> : 
        null
      }
      {showSent ?
        <div className="message-list-item_sent_text">Sent</div> :
        null
      }
      <button
        onClick={(e) => onDelete(e, index, value)}
        className="btn btn-success message-delete-btn"
      >DELETE</button>
    </li>
  )
});

export default SortableMessageItem