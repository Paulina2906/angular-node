const axios = require("axios").create({baseUrl: "http://apisimpsons.fly.dev"})

const getPersonajes = (req, res, next) => {
    console.log('----------------')
    axios.get('https://apisimpsons.fly.dev/api/personajes?limit=20')
    .then(function (response) {
        // manejar respuesta exitosa
        //console.log(response.data.docs)
        res.send(response.data.docs)
    })
    .catch(function (error) {
        // manejar error
        console.log(error)
        res.send('error')
    })
}

const getPersonaje = (req, res, next) => {
    const nombre = req.query.nombre
    console.log(nombre)
    axios.get(`https://apisimpsons.fly.dev/api/personajes/find/${nombre}`)
    .then(function (response) {
        // manejar respuesta exitosa
        console.log(response.data)
        res.send(response.data)
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