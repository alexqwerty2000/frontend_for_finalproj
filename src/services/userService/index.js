import config from 'config'

export const userService = {
    signup,
}

const signup = (fullname, email, location) =>{
  const requestOptions = {
      method: 'POST',
      headers:{'Content Type': 'application/json'},
      body: JSON.stringify({fullname, email, location})
  };

  return fetch()
}
