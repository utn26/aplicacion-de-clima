const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const colors = require('colors');

const getInfo = async(direccion) => {
    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `La temperatura actual de ${coords.name} es de ${temp} °c`.yellow;
    } catch {
        return `No se pudo determinar el clima de ${direccion}`.red;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);