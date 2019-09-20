import fetch from '../../../../../services/fetchHelper'

const usersEndPoint = 'users/'

export const getUsers = async () => {
  const users = await fetch(usersEndPoint)
  return users
}

export const getPosts = () => {
  console.log('posts was fetched')
}
