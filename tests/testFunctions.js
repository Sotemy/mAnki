const axios = require('axios');

function simpleTest() {
    const response = axios.get('http://localhost:3001/').then(data=>data.json());
    console.log(response)
    return response
}

module.exports = simpleTest