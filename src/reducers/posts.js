import {
  FETCH_ALL,
  DELETE,
  LIKE,
  CREATE,
  UPDATE,
} from '../constants/actionTypes'
const reducer = (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload
    case CREATE:
      return [...posts, action.payload]
    case UPDATE:
      // the action.payload is the updated post.
      // if the if of post is equal to payload.id then update the store with the updated post
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      )
    case LIKE:
      return posts.map((post) =>
        post.id === action.payload.id ? action.payload : post
      )
    case DELETE:
      return posts.filter((post) => post.id !== action.payload)

    default:
      return posts
  }
}

export default reducer
