const axios = require("axios"); //utilizamos la libreria AXIOS para los http request

const getPersonajes = (req, res, next) => {
    axios.get('https://apisimpsons.fly.dev/api/personajes?limit=30')  //en esta llamada estamos trayendo personajes con un limite de 30 registros los cuales se muestran en el select del front
    .then(function (response) {  //si la API de los simpson responde exitosamente entra en el then
        // manejar respuesta exitosa
        //console.log(response.data.docs)
        res.send(response.data.docs)//aqui regresamos la informacion
    })
    .catch(function (error) {//en caso de algun error entrara a esta seccion 
        // manejar error
        console.log(error)
        res.send('error')
    })
}

const getPersonaje = (req, res, next) => {//esta funcion es para traer un solo personaje
    const nombre = req.query.nombre//aqui obtenemos el nombre que se envio como parametro 
    const n = nombre.split(' ')[0];//aqui obtenemos solo el primer nombre ya que el API de los simpson no funciona bien si enviamos nombres con espacios
    axios.get(`https://apisimpsons.fly.dev/api/personajes/find/${n}`)//usamos el request 
    .then(function (response) {
        // manejar respuesta exitosa
        console.log(response.data)
        let personaje = response.data.result.find(o => o.Nombre === nombre);//como solo enviamos el primer nombre es probable que nos traiga mas de 1 result, entonces comparamos el nombre completo para obtener unicamente el personaje seleccionado
        console.log(response.data)
        res.send(personaje)//aqui regresamos el personaje seleccionado
    })
    .catch(function (error) {
        // manejar error
        console.log(error)
        res.send('error')
    })
}

module.exports = {
    getPersonajes,
    getPersonaje
}