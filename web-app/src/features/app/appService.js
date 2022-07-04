import axios from "axios"

const API_URL = '/api/'


const getData = async (token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)
    console.log(response)


    if(!response.data){
        localStorage.setItem('app', JSON.stringify(response.data))
    }

    return response
}

const appService = {
    getData
}

export default appService;