const phoneStatus = (state = "", action) => {
  switch(action.type) {
    case 'SET_PHONE_STATUS':
      return action.value
    default:
      return state
  }
}

export default phoneStatus