import React from 'react'
import { SortableContainer } from 'react-sortable-hoc';

import SortableMessageItem from './SortableMessageItem'

const SortableMessageList = SortableContainer(({messages, onDelete, profileImage}) => {
  let fromSenderMsgs;
  let toSenderMsgs;

  messages.forEach((message, index) => {
    if (message.messageSenderReceiver === 'from') {
      fromSenderMsgs = index;
    } else {
      toSenderMsgs = index;
    }
  });

  return (
    <div className="sortable-list">
      {messages.map((value, index) =>
        <SortableMessageItem
          key={`item-${index}`}
          index={index}
          value={value}
          profileImage={profileImage}
          onDelete={onDelete}
          showHeart={index === fromSenderMsgs ? true : false}
          showSent={index === toSenderMsgs ? true : false}
        />
      )}
    </div>
  );
});

export default SortableMessageList

// last 'from' message should have a heart next to it
// even if more 'to' messages have gone through

// have array with all the messages which have information about if it was a to or from message
// just need to know the index of the last 'from' message and pass that as a prop
// var arr = [
//   {sender:'to'},
//   {sender: 'from'},
//   {sender:'to'},
//   {sender:'from'}
// ]

