/**
 * 
 *  En este archivo se maneja la interfaz hombre máquina (IHM)
 * 
 */

/* Declaración de requieres*/

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

// En este caso se usa options en lugar de commands en yargs
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Nombre de la ciudad que se quiere consultar.',
        demand: true
    }
}).argv;

let getInfo = async(direccion) => {

    try {

        let ubicacion = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(ubicacion.lat, ubicacion.lng);

        return `El clima en ${ ubicacion.direccion } es de ${ temp }`;

    } catch (e) {
        return `No se pudo determinar el clima en ${ direccion }`;
    }



}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));