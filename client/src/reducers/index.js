import enStrings from './../resources/strings.json'
import ptStrings from './../resources/strings.pt-br.json'

import {
  LOGIN,
  LOGOUT,
  SHOW_TOAST,
  CHANGE_LANGUAGE
} from './../actions'

import { REHYDRATE } from 'redux-persist'

const initialState = {
  R: { strings: enStrings },
  language: 'en',
  user: null,
  showToast: 0,
  toastMessage: ''
}

function reducer (state = initialState, action) {
  switch (action.type) {
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

    case CHANGE_LANGUAGE:
      const strings = action.language === 'pt-br' ? ptStrings : enStrings

      return {
        ...state,
        language: action.language,
        R: { strings }
      }

    case REHYDRATE:
      if (action.payload.user) {
        return {
          ...state,
          user: action.payload.user
        }
      } else if (action.payload.language) {
        return {
          ...state,
          language: action.payload.language
        }
      } else {
        return state
      }

    default:
      return (state)
  }
}

export default reducer
