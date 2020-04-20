
const axios = require ('axios')

const getClima=async (lat,lng) =>{
    
   const resp= await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=04a7cb7197f298b3df77e2bf0b1cfddd&units=metric`)
    return resp.data.main.temp
}

module.exports ={
    getClima
}