const allowedMethods = ['get', 'post', 'put', 'delete']

const jsonHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
}

const baseObject = { headers: jsonHeaders, baseUrl: null }

export default allowedMethods.reduce((api, method) => {
  api[method] = (endpoint, body, options) => {
    const { headers, baseUrl = '' } = api
    const hasFullURl = /^(www|https?)/.test(endpoint)
    const url = hasFullURl ? endpoint : (baseUrl + endpoint)
    return fetch(
      url,
      {
        method,
        headers,
        body: JSON.stringify(body),
        ...options
      }
    )
  }
  return api
}, baseObject)
