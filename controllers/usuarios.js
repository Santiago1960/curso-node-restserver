const { response, request } = require('express'); // Importante para tener las ayudas con res.

const usuariosGet = (req = request, res = response) => {

    const params = req.query;

    res.json({
        msg: 'get API - controlador',
        params
    });
}

const usuariosPut = (req = request, res = response) => {

    const id = req.params.id;

    res.json({
        msg: 'put API - controlador',
        id
    });
}

const usuariosPost = (req, res = response) => {

    // const body = req.body;
    const { nombre, edad } = req.body;

    res.json({
        msg: 'post API - controlador',
        // body
        nombre,
        edad
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controlador'
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - controlador'
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}