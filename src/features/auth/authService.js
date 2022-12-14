import axios from 'axios'

const API_URL = 'http://152.228.137.213:4001/auth'

// Register user
const register = async (userData) => {
  const response = await axios.post ('http://152.228.137.213:4001/krysto/register',  userData)
  if (response.data) {
    
  console.log(response.data);
    
  }
  return response.data
}

// login user
const login = async (userData) => {
  const response = await axios.post(API_URL + '/login', userData)
  
  if (response.data) {
    localStorage.setItem('userToken', JSON.stringify(response.data.token))
    localStorage.setItem('userId', JSON.stringify(response.data.user._id))
     window.location.reload()
  }
  return response.data
}
// login user


// Logout
const logout = () => {
  localStorage.removeItem('userToken')
  localStorage.removeItem('userId')
}

const authService = {
  register,
  logout,
  login,

}

export default authService
