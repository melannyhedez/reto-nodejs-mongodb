const express = require('express')
const mongoose = require('mongoose')
const app = express()
const router = express.Router()
// Schemas
const CurriculumSchema = require('./models/Curriculum')
// Configuraciones
app.use(express.urlencoded({extended: true}))
app.use(express.json())
// Puerto del servidor
const port = process.env.PORT || 3000
// Conexion a MongoDB
mongoose.connect("mongodbURI")

// API/CRUD/Routes
router.get('/', (req, res) => {
    res.send("Hello world")
})
// Curriculum
router.get('/cv', (req, res) => {
    CurriculumSchema.find((err, datos) => {
        if(err) {
            console.log(err, "Error leyendo los datos")
        } else {
            res.send(datos)
        }
    })
})

router.post('/cv', (req, res) => {
    let curriculum = new CurriculumSchema({
        tipoDocumento: req.body.tipoDocumento,
        numeroDocumento: req.body.numeroDocumento,
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        direccion: req.body.direccion,
        correoElectronico: req.body.email,
        telefonoFijo: req.body.fijo,
        telefonoCelular: req.body.celular,
        urlSitioWeb: req.body.url,
        descripcionPerfil: req.body.descripcion
    })

    curriculum.save((err, datos) => {
        if(err) {
            console.log(err, "Error guardando los datos")
        } else {
            console.log("Curriculum vitae Agregado")
            res.send(datos)
        } 
    })
})

app.use(router)
app.listen(port, () => console.log(`Server running on port: ${port}`))