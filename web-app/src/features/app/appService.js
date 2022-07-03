import axios from "axios"

const API_URL = '/api/'

// register user
const syncronizeData = async (data, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, data, config)


    if(!response.data){
        localStorage.setItem('app', JSON.stringify(response.data))
    }

    return response
}



export default syncronizeData;