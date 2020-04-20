const axios = require ('axios')
const lugar= require ('./Lugar/Lugar')
const clima = require('./clima/clima')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}) .argv


const getInfo= async (direccion) =>
{

//salida
try {
    const coords = await lugar.getLugarLatLong(direccion)
    const temp= await clima.getClima(coords.latitud, coords.longitud)
    return `El clima de ${direccion} es de ${temp}`

} catch (error) {
    return `No se pudo determinar el clima de ${direccion}`
}

}

getInfo(argv.direccion)
.then(mensaje=> 
    console.log(mensaje))
    .catch(e=>console.log(e))












//lugar.getLugarLatLong(argv.direccion)
 //   .then(console.log)


 //clima.getClima(-32.4886188,-58.2234697)
 //.then(console.log)
 //.catch(console.log)