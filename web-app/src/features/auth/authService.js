import axios from "axios"

import env from "react-dotenv";

const API_URL = env.REACT_APP_BASE_URL

// register user
const register = async (userData) => {
    const response = await axios.post(API_URL+'/auth/register', userData)


    if(!response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response
}

// register user
const login = async (userData) => {
    const response = await axios.post(API_URL+'/auth/login', userData)


    if(!response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
        
    }

    return response
}
const logout = () => {
    localStorage.removeItem('user')
}

const authService = {
    register,
    login,
    logout
}

export default authService;