import config from './../config'
const { fetch } = window

class Fetcher {
  constructor (authorizationToken) {
    this.authorizationToken = authorizationToken
    this.baseUrl = config.apiUrl
    this.headers = {
      'Authorization': authorizationToken,
      'Content-Type': 'application/json'
    }
  }

  get (path) {
    const url = `${this.baseUrl}/${path}`
    return fetch(url, {
      headers: this.headers,
      method: 'get'
    })
  }

  post (path, body) {
    const url = `${this.baseUrl}/${path}`
    return fetch(url, {
      headers: this.headers,
      method: 'post',
      body: JSON.stringify(body)
    })
  }

  upload (path, formData) {
    const url = `${this.baseUrl}/${path}`
    return fetch(url, {
      headers: { 'Authorization': this.authorizationToken },
      method: 'post',
      body: formData
    })
  }

  put (path, body) {
    const url = `${this.baseUrl}/${path}`
    return fetch(url, {
      headers: this.headers,
      method: 'put',
      body: JSON.stringify(body)
    })
  }

  delete (path) {
    const url = `${this.baseUrl}/${path}`
    return fetch(url, {
      headers: this.headers,
      method: 'delete'
    })
  }
}

export default Fetcher
