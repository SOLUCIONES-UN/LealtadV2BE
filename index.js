const express = require('express');
const {sequelize} = require('./src/database/database');


const app = express();
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Seting
app.set('port', process.env.PORT || 3000);


//declacion de los MiddelWare
app.use(express.json());



app.use(require('./src/routes/transaccion.routes'));
app.use(require('./src/routes/columna.routes'));
app.use(require('./src/routes/categoria.routes'));
app.use(require('./src/routes/promocion.routes'));
app.use(require('./src/routes/departamento.routes'));
app.use(require('./src/routes/municipio.routes'));
app.use(require('./src/routes/rol.routes'));
app.use(require('./src/routes/terceros.routes'));
app.use(require('./src/routes/premio.routes'));
app.use(require('./src/routes/usuario.routes'));
app.use(require('./src/routes/campania.routes'));
<<<<<<< HEAD
app.use(require('./src/routes/detalleCampania.routes'))
=======
app.use(require('./src/routes/menu.routes'))

>>>>>>> d3e4be2b8c23fa085a093e7a0fb1ce589099c32b
//corremos el servidor
app.listen(app.get('port'), () => {
    console.log('Server Running on Port: ' + app.get('port'));
}); 