export const profileImage = (value) => ({
  type: 'SET_PROFILE_IMAGE',
  value
})

let nextTodoId = 0
export const addMessage = (value) => ({
  type: 'ADD_MESSAGE',
  id: nextTodoId++,
  messageContents: value.messageContents,
  messageSenderReceiver: value.messageSenderReceiver
})

export const deleteMessage = (value, index) => ({
  type: 'DELETE_MESSAGE',
  id: value.id,
  index: index
})

export const phoneStatus = (value) => ({
  type: 'SET_PHONE_STATUS',
  phoneBatteryPercent: value.phoneBatteryPercent,
  phoneServiceProvider: value.phoneServiceProvider,
  phoneTime: value.phoneTime,
  AmPm: value.AmPm
})