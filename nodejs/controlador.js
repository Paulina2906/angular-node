const axios = require("axios").create({baseUrl: "http://apisimpsons.fly.dev"})

const getPersonajes = (req, res, next) => {
    console.log('----------------')
    axios.get('https://apisimpsons.fly.dev/api/personajes?limit=30')
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
    const n = nombre.split(' ')[0];
    axios.get(`https://apisimpsons.fly.dev/api/personajes/find/${n}`)
    .then(function (response) {
        // manejar respuesta exitosa
        console.log(response.data)
        let personaje = response.data.result.find(o => o.Nombre === nombre);
        console.log(response.data)
        res.send(personaje)
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