import axios from "axios"
import env from "react-dotenv";

const API_URL = env.REACT_APP_BASE_URL


const getData = async (token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL+"/", config)
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