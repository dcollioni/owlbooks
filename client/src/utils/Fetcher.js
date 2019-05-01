const { fetch } = window

class Fetcher {
  constructor (authorizationToken) {
    this.authorizationToken = authorizationToken
    this.baseUrl = '/api'
    this.headers = {
      'Authorization': `bearer ${authorizationToken}`,
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

  post (path, payload) {
    const url = `${this.baseUrl}/${path}`
    return fetch(url, {
      headers: this.headers,
      method: 'post',
      body: JSON.stringify(payload)
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

  put (path, payload) {
    const url = `${this.baseUrl}/${path}`
    return fetch(url, {
      headers: this.headers,
      method: 'put',
      body: JSON.stringify(payload)
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
