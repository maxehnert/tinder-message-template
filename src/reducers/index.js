
import { combineReducers } from 'redux'
import profileImage from './profileImage'
import messages from './messages'

const tinderMessageGen = combineReducers({
  profileImage,
  messages
})

export default tinderMessageGen
