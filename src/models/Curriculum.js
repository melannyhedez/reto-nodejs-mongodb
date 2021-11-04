const mongoose = require('mongoose')

let CurriculumSchema = new mongoose.Schema({
    tipoDocumento: String,
    numeroDocumento: Number,
    nombres: String,
    apellidos: String,
    direccion: String,
    correoElectronico: String,
    telefonoFijo: Number,
    telefonoCelular: Number,
    urlSitioWeb: String,
    descripcionPerfil: String
})


module.exports = mongoose.model('curriculum', CurriculumSchema, 'CurriculumData')