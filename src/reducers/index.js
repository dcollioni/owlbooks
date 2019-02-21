import strings from './../resources/strings.json'

import {
  LOGIN,
  LOGOUT,
  LOAD_RESOURCES
} from './../actions'

import { REHYDRATE } from 'redux-persist'

const initialState = {
  R: { strings },
  user: null
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
