import React, { Component } from 'react'

import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

const SortableItem = SortableElement((key, index, value, pImg, /*{value}*/) => {
  console.log('itemsss', key, index, value, pImg);
  const { messageContents, matchImage, messageSenderReceiver } = key.value //value
// console.log('matchImage', matchImage, ' pImg ', pImg);
  return (
    <li className="message-list-item">
      {messageSenderReceiver == 'from' ? <img src={matchImage} className="img-circle message-list-item_img" /> : null}
      <div className={messageSenderReceiver == 'from' ? 'message-list-item-inner message-list-item_from' : 'message-list-item-inner message-list-item_to' }>
        {messageContents}
      </div>
      <button onClick={key.onClick(this, event)}>DELETE</button>
    </li>
  )
});

const SortableList = SortableContainer(({messages,onDeleteItem, pImg}) => {
  const deleteNode = (event, args) => {
    console.log('deleteNode', event, args);
  }
  return (
    <div className="sortable-list">
      {messages.map((value, index) =>
        <SortableItem key={`item-${index}`} index={index} value={value} pImg={pImg} onClick={onDeleteItem} />
      )}
    </div>
  );
});

class SortableComponent extends Component {
  constructor(props) {
    super(props)

    this.state = this.props

    this.onSortEnd = this.onSortEnd.bind(this)
    this.onDelete = this.onDelete.bind(this)
  }

  onSortEnd({oldIndex, newIndex}) {
    if (oldIndex !== newIndex) {

      let messages = this.state.messages.value.messages

      this.state.messages.value.messages = arrayMove(messages, oldIndex, newIndex)
      let updatedStateMessages = this.state.messages

      this.setState({
        messages : updatedStateMessages
      });
    }
  }

  onDelete(event, args, key) {
    console.log('onDelete', event, args, key);
  }

  render() {
    console.log('SortableComponent state', this.state);
    let messagesArr = this.state.messages.value.messages
    return (
      <SortableList messages={messagesArr} onSortEnd={this.onSortEnd} pImg={this.state.matchImage} onDeleteItem={this.onDelete} />
    )
  }
}

export default SortableComponent
