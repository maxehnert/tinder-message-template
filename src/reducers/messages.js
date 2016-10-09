// Reducers
const message = (state, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        id: action.id,
        messageContents: action.messageContents,
        messageSenderReceiver: action.messageSenderReceiver,
        completed: false
      }
    default:
      return state
  }
}

const messages = (state = [], action) => {
  // console.log('addMessage reducer', action)

  switch (action.type) {
    case 'ADD_MESSAGE':
      return [
        ...state,
        message(undefined, action)
      ]
    case 'DELETE_MESSAGE':
      return state.filter( (item, index) => index !== action.index)
    default:
      return state
  }
}

export default messages
