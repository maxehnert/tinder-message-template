const profileImage = (state = '', action) => {
  switch (action.type) {
    case 'SET_PROFILE_IMAGE':
      return action.image
    default:
      return state
  }
}

export default profileImage
