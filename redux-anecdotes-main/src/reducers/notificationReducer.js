  const notificationReducer = (state = null, action) => {
  switch (action.type) {
      case 'NEW_NOTIFICATION':
          return action.message

      case 'RESET_NOTIFICATION':
          return null
      default:
          return state
  }
}
let timeResetter;

export const setNotification = (message, seconds) => {
  if (timeResetter) {
    clearTimeout(timeResetter);
  }
  return  dispatch => {
    dispatch({
      type: 'NEW_NOTIFICATION',
      message: {
          message
      }
    })

    timeResetter = setTimeout(() => {
        dispatch({ type: 'RESET_NOTIFICATION' })
      }, seconds)
  }
}

export default notificationReducer