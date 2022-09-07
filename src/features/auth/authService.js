import axios from 'axios'

const API_URL = 'http://152.228.137.213:4001/auth'

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL + '/register',  userData)
  if (response.data) {
    localStorage.setItem('userToken', JSON.stringify(response.data.token))
    localStorage.setItem('userId', JSON.stringify(response.data.userId))
    localStorage.setItem('user', JSON.stringify(response.data.user))
    
  }
  return response.data
}

// login user
const login = async (userData) => {
  const response = await axios.post(API_URL + '/login', userData)
  
  if (response.data) {
    localStorage.setItem('userToken', JSON.stringify(response.data.token))
    localStorage.setItem('userId', JSON.stringify(response.data.user._id))
    localStorage.setItem('user', JSON.stringify(response.data.user))
  }
  return response.data
}

// Logout
const logout = () => {
  localStorage.removeItem('userToken')
  localStorage.removeItem('user')
}

const authService = {
  register,
  logout,
  login,

}

export default authService
