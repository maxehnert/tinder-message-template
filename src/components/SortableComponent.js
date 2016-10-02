import React, { Component } from 'react'

import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

const SortableItem = SortableElement(({value}) => <li>{value}</li>);

const SortableList = SortableContainer(({messages}) => {
    return (
        <ul>
          {messages.map((value, index) =>
            <SortableItem key={`item-${index}`} index={index} value={value.matchName} />
          )}
        </ul>
    );
});

class SortableComponent extends Component {
  constructor(props) {
    super(props)
    this.state = this.props.messages
  }
    // state = {
    //     messages: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']
    // }
    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState({
            messages: arrayMove(this.state.messages, oldIndex, newIndex)
        });
    };
    render() {
      console.log('SortableComponent props', this.props);
        return (
            <SortableList messages={this.state.messages} onSortEnd={this.onSortEnd} />
        )
    }
}

export default SortableComponent
