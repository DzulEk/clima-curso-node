const axios = require('axios');


const getClima = async(lat, lng) => {


    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=b74a3ea30358953abae33b6aadbfa340`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}