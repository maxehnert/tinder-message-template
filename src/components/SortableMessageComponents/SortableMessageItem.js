import React from 'react'
import { SortableElement } from 'react-sortable-hoc';

const SortableMessageItem = SortableElement(({value, profileImage, onDelete, index}) => {
  const { messageContents, messageSenderReceiver } = value

  return (
    <li className="message-list-item">
      {messageSenderReceiver === 'from' ? <img src={profileImage} className="img-circle message-list-item_img" alt="profile" /> : null}
      <div className={messageSenderReceiver === 'from' ? 'message-list-item-inner message-list-item_from' : 'message-list-item-inner message-list-item_to' }>
        {messageContents}
      </div>
      <button
        onClick={(e) => onDelete(e, index, value)}

      >DELETE</button>
    </li>
  )
});

export default SortableMessageItem
