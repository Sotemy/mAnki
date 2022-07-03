import axios from "axios"

const API_URL = '/api/'

// register user
const register = async () => {
    const response = await axios.post(API_URL)


    if(!response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response
}