import strings from './../resources/strings.json'

import {
  LOGIN,
  LOGOUT,
  LOAD_RESOURCES,
  SHOW_TOAST
} from './../actions'

import { REHYDRATE } from 'redux-persist'

const initialState = {
  R: { strings },
  user: null,
  showToast: 0,
  toastMessage: ''
}

function reducer (state = initialState, action) {
  switch (action.type) {
    case LOAD_RESOURCES:
      return {
        ...state,
        R: action.resources
      }

    case LOGIN:
      return {
        ...state,
        user: action.user
      }

    case LOGOUT:
      return {
        ...state,
        user: null
      }

    case SHOW_TOAST:
      return {
        ...state,
        showToast: new Date().getTime(),
        toastMessage: action.message
      }

    case REHYDRATE:
      if (action.payload) {
        return {
          ...state,
          user: action.payload.user
        }
      } else {
        return state
      }

    default:
      return (state)
  }
}

export default reducer
