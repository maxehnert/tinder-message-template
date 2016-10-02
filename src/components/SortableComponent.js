import React, { Component } from 'react'

import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

const SortableItem = SortableElement(({value}) => {
  console.log('valueeee', value);
  return (
    <li className="message-list-item">
      <div>
        {value}
      </div>
    </li>
  )
});

const SortableList = SortableContainer(({messages}) => {
  return (
    <ul>
      {messages.map((value, index) =>
        <SortableItem key={`item-${index}`} index={index} value={value.messageContents} />
      )}
    </ul>
  );
});

class SortableComponent extends Component {
  constructor(props) {
    super(props)
    this.state = this.props.messages
  }

  onSortEnd({oldIndex, newIndex}) {
      this.setState({
          messages: arrayMove(this.state.messages, oldIndex, newIndex)
      });
  }

  render() {
    console.log('SortableComponent props', this.props);
    return (
      <SortableList messages={this.state.messages} onSortEnd={this.onSortEnd} />
    )
  }
}

export default SortableComponent
