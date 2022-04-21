const defaultState = {
  myPhotos: [6],
  length: 6
}

export const photosReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'show':
      return { ...state, myPhotos: [ ...state.myPhotos, action.payload ] }
      case 'hide':
        return { ...state, myPhotos: state.myPhotos.shift(photo => photo.id !== action.payload) }
    default:
      return state
    }
}