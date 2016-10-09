import React, { Component } from 'react'
import { connect } from 'react-redux'
import { arrayMove } from 'react-sortable-hoc';

import{ deleteMessage } from '../../actions'

import SortableMessageList from './SortableMessageList'

class SortableMessageComponent extends Component {
  constructor(props) {
    super(props)

    this.onSortEnd = this.onSortEnd.bind(this)
  }

  onSortEnd({oldIndex, newIndex}) {
    if (oldIndex !== newIndex) {
      let messages = this.props.messages

      this.setState({
        messages : arrayMove(messages, oldIndex, newIndex)
      });
    }
  }

  shouldCancelStart(event) {

    // Stop the sorting library from overriding the button click event
    if (event.target.tagName === 'BUTTON') {
      return true;
    }
  }

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
        shouldCancelStart={this.shouldCancelStart}
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
  onDelete: (event, index, value) => {
    dispatch(deleteMessage(value, index))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SortableMessageComponent)
