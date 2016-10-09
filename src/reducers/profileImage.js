const profileImage = (state = "", action) => {
  switch (action.type) {
    case 'SET_PROFILE_IMAGE':
      return action.value
    default:
      return state
  }
}

export default profileImage
