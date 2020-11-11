const axios = require('axios');
const colors = require('colors');
const getLugarLatLng = async(direccion) => {

    const encodedURL = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `http://api.weatherapi.com/v1/current.json?key=8f3f4e4d6de2411db33155516200511&q=${encodedURL}`,
        headers: { 'Key': '8f3f4e4d6de2411db33155516200511' }

    })
    const resp = await instance.get().catch(() => {
        throw new Error(`No hay resultados para ${direccion}`.red);
    });

    const data = resp.data.location;
    const name = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        name,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}