const customFetch = async (endpoint, method = 'GET', body) => {
  console.log("TCL: customFetch -> endpoint", endpoint)
  try {
    const isForm = body instanceof FormData

    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }

    if (isForm) {
      delete headers['Content-Type']
    }

    const response = await fetch(`http://localhost:8000/api/${endpoint}`, {
      method,
      body: isForm ? body : JSON.stringify(body),
      headers,
    })

    if (!response) return response

    const contentType = response.headers.get('content-type')

    if (contentType && contentType.indexOf('application/json') !== -1) {
      return response.json()
    }

    return response.text()
  } catch (err) {
    console.error(err)
    throw err
  }
}

export default customFetch
