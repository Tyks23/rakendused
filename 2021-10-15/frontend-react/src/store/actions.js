export const POST_ADD = "POST_ADD"
export const POST_REMOVE = "POST_REMOVE"
export const POST_UPDATE = "POST_UPDATE"
export const USER_LOGIN = "USER_LOGIN"
export const USER_LOGOUT = "USER_LOGOUT"

export const addPost = post => ({
  type: POST_ADD,
  payload: post
})

export const removePost = id => ({
  type: POST_REMOVE,
  payload: id
})

export const updatePosts = array => ({
  type: POST_UPDATE,
  payload: array
})

export const loginUser = data => {
  const payload = {
    token: data.token,
    user: {
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
    }
  };

  localStorage.setItem('token', data.token);
  localStorage.setItem('user', JSON.stringify(payload.user));
  return {type: USER_LOGIN, payload};
}

export const logoutUser = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  return {
    type: USER_LOGOUT
  };
}