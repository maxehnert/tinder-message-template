import React, { Component } from 'react'
import { connect } from 'react-redux'
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

import{ deleteMessage } from '../actions'

const SortableMessageItem = SortableElement(({value, profileImage, onDelete, index}) => {
  const { messageContents, messageSenderReceiver } = value

  return (
    <li className="message-list-item">
      {messageSenderReceiver === 'from' ? <img src={profileImage} className="img-circle message-list-item_img" alt="profile" /> : null}
      <div className={messageSenderReceiver === 'from' ? 'message-list-item-inner message-list-item_from' : 'message-list-item-inner message-list-item_to' }>
        {messageContents}
      </div>
      <button
        className="btn btn-success message-delete-btn"
        onClick={onDelete(index, value)}>
        DELETE
      </button>
      index {index}
    </li>
  )
});

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

class SortableMessageComponent extends Component {
  constructor(props) {
    super(props)

    this.onSortEnd = this.onSortEnd.bind(this)
    // this.onDelete = this.onDelete.bind(this)
  }

  onSortEnd({oldIndex, newIndex}) {
    if (oldIndex !== newIndex) {
      let messages = this.props.messages

      this.setState({
        messages : arrayMove(messages, oldIndex, newIndex)
      });
    }
  }

  // onDelete(event, args, key) {
  //   // console.log('onDelete', event, args, key);
  // }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps ', nextProps);
    this.setState({
      messages: nextProps.messages
    })

  }

  render() {
    const { messages, profileImage, onDelete } = this.props;

    return (
      <SortableMessageList
        messages={messages}
        onSortEnd={this.onSortEnd}
        profileImage={profileImage}
        onDelete={onDelete}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  messages: state.messages,
  profileImage: state.profileImage
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDelete: (index, messages) => {
    // console.log('dispatch mapDispatchToProps', dispatch);
    console.log('ownProps mapDispatchToProps', ownProps, ' param ', index, messages)
    // dispatch(deleteMessage(messages, index))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SortableMessageComponent)
