import axios from "axios"

const BASE_URL = 'http://192.168.56.1:3001/api'

const login = async (user) => {
    const response = await axios.post(BASE_URL+"/auth/login", user)

    localStorage.setItem('user', JSON.stringify(response.data))

    return response.data
}

const register = async (user) => {
    const response = await axios.post(BASE_URL+"/auth/register", user)

    localStorage.setItem('user', JSON.stringify(response.data))

    return response.data
}

const authController = {register, login}

export default authController
