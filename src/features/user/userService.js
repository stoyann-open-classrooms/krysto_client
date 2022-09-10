import axios from 'axios'
const API_URL = 'http://152.228.137.213:4001/auth/whoami/'

const getProfil = async () => {
  axios.defaults.headers.common['X-Auth-Token'] = `${JSON.parse( localStorage.getItem('userToken'))}`;
  const response = await axios.get(`${API_URL}`)
  return response.data
}


const userService = {
  getProfil
}

export default userService
