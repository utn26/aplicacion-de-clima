const axios = require('axios');
const KEY = '7bff76892dd1219635f54df8c98dfa1f';

const getClima = async(lat, lng) => {
    const resp = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${KEY}&units=metric`
    );
    return resp.data.main.temp;
}
module.exports = {
    getClima
}