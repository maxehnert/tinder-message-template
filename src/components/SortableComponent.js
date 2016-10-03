import React, { Component } from 'react'

import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

const SortableItem = SortableElement(({value}) => {
  // console.log('valueeee', value);
  const { messageContents, matchImage, messageSenderReceiver } = value

  return (
    <li className="message-list-item">
      {messageSenderReceiver == 'from' ? <img src={matchImage} className="img-circle message-list-item_img" /> : null}
      <div className={messageSenderReceiver == 'from' ? 'message-list-item-inner message-list-item_from' : 'message-list-item-inner message-list-item_to' }>
        {messageContents}
      </div>
    </li>
  )
});

const SortableList = SortableContainer(({messages}) => {
  return (
    <div className="sortable-list">
      {messages.map((value, index) =>
        <SortableItem key={`item-${index}`} index={index} value={value} />
      )}
    </div>
  );
});

class SortableComponent extends Component {
  constructor(props) {
    super(props)

    this.state = this.props.messages
    this.onSortEnd = this.onSortEnd.bind(this)
  }

  onSortEnd({oldIndex, newIndex}) {
    if (oldIndex !== newIndex) {
      let messages = this.state

      this.setState({
        messages: arrayMove(this.state.messages, oldIndex, newIndex)
      });
    }
  }

  render() {
    return (
      <SortableList messages={this.state.messages} onSortEnd={this.onSortEnd} />
    )
  }
}

export default SortableComponent
