import fetch from '../../../../../services/fetchHelper'

const usersEndPoint = 'users/'

export const getUsers = async () => {
  const users = await fetch(usersEndPoint)
  return users
}

export const createUser = async user => {
  await fetch(usersEndPoint, 'POST', user)
}
