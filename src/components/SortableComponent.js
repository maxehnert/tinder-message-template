import React, { Component } from 'react'
import { connect } from 'react-redux'

import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

const SortableItem = SortableElement(({value, profileImage}) => {
  const { messageContents, messageSenderReceiver } = value

  return (
    <li className="message-list-item">
      {messageSenderReceiver === 'from' ? <img src={profileImage} className="img-circle message-list-item_img" alt="profile" /> : null}
      <div className={messageSenderReceiver === 'from' ? 'message-list-item-inner message-list-item_from' : 'message-list-item-inner message-list-item_to' }>
        {messageContents}
      </div>
      <button>DELETE</button>
    </li>
  )
});

const SortableList = SortableContainer(({messages,onDeleteItem, profileImage}) => {
  return (
    <div className="sortable-list">
      {messages.map((value, index) =>
        <SortableItem key={`item-${index}`} index={index} value={value} profileImage={profileImage} onClick={onDeleteItem} />
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
      let messages = this.props.messages

      this.setState({
        messages : arrayMove(messages, oldIndex, newIndex)
      });
    }
  }

  onDelete(event, args, key) {
    // console.log('onDelete', event, args, key);
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps ', nextProps);
    this.setState({
      messages: nextProps.messages
    })

  }

  render() {
    console.log('SortableComponent props', this.props);
    const { messages, profileImage } = this.props;
    // let messagesArr = this.state.messages.value.messages
    return (
      <SortableList messages={messages} onSortEnd={this.onSortEnd} profileImage={profileImage} onDeleteItem={this.onDelete} />
    )
  }
}

const mapStateToProps = (state) => ({
  messages: state.messages,
  profileImage: state.profileImage
})

export default connect(mapStateToProps)(SortableComponent)

// export default SortableComponent
