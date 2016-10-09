import React from 'react'
import { SortableContainer } from 'react-sortable-hoc';

import SortableMessageItem from './SortableMessageItem'

const SortableMessageList = SortableContainer(({messages, onDelete, profileImage}) => {
  return (
    <div className="sortable-list">
      {messages.map((value, index) =>
        <SortableMessageItem
          key={`item-${index}`}
          index={index}
          value={value}
          profileImage={profileImage}
          onDelete={onDelete}
        />
      )}
    </div>
  );
});

export default SortableMessageList
