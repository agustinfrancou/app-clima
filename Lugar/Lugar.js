
const axios= require('axios')

const getLugarLatLong= async (dir)=>{
   
const encodeUri= encodeURI(dir);
//console.log(encodeUri);


const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUri}`,
    headers:{'X-RapidAPI-key':'35f1c28dfamsh1b0ca76975dfa60p1eb8ffjsn807987ff96d2'}
})



/*instance.get()
    .then(resp =>{
        console.log(resp.data.Results[0]);
    })
    .catch (err=>{
        console.log('EROR!!!',err);
    })
*/


    const resp= await instance.get()

    if(resp.data.Results.length === 0){
        throw new Error (`No hay resultados para ${dir}`)
    }

    const data= resp.data.Results[0];
    const direccion= data.name;
    const latitud = data.lat;
    const longitud = data.lon;


    return {
        direccion,
        latitud,
        longitud
    }

}


module.exports = {
    getLugarLatLong
}




