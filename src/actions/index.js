export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const LOAD_RESOURCES = 'LOAD_RESOURCES'

export function login (user) {
  return {
    type: LOGIN,
    user
  }
}

export function logout () {
  return {
    type: LOGOUT
  }
}

export function loadResources (resources) {
  return {
    type: LOAD_RESOURCES,
    resources
  }
}
