import React, { Component } from 'react'

import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

const SortableItem = SortableElement(({value}, pImg) => {
  const { messageContents, matchImage, messageSenderReceiver } = value
// console.log('matchImage', matchImage, ' pImg ', pImg);
  return (
    <li className="message-list-item">
      {messageSenderReceiver == 'from' ? <img src={matchImage} className="img-circle message-list-item_img" /> : null}
      <div className={messageSenderReceiver == 'from' ? 'message-list-item-inner message-list-item_from' : 'message-list-item-inner message-list-item_to' }>
        {messageContents}
      </div>
    </li>
  )
});

const SortableList = SortableContainer(({messages}, pImg) => {
  return (
    <div className="sortable-list">
      {messages.map((value, index) =>
        <SortableItem key={`item-${index}`} index={index} value={value} pImg={pImg} />
      )}
    </div>
  );
});

class SortableComponent extends Component {
  constructor(props) {
    super(props)

    this.state = this.props

    this.onSortEnd = this.onSortEnd.bind(this)
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

  render() {
    let messagesArr = this.state.messages.value.messages
    return (
      <SortableList messages={messagesArr} onSortEnd={this.onSortEnd} pImg={this.state.matchImage} />
    )
  }
}

export default SortableComponent
