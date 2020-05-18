//const morgan = require('morgan');
const argv = require('./config/yargs').argv;
const persona = require('./src/form-perso');
const colors =  require('colors');

let comando = argv._[0];
// settings se podria decir que aqui estoy creando una variable y el listen la uso
app.set('port',process.env.PORT || 3000); 
        // en caso exista puerto definido que lo tome sino tome el 3000 por defecto

// middlewares 
//app.use(morgan('dev'));
app.use(express.urlencoded({extended: false})); // para enter los datos que vienen desde formularios input y esas cosas
app.use(express.json());      // para soportar formatos json, permite poder recibir y entender este formato

// routes  
app.get('/',(req, res) => {
     

});

// Empezando el servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor en puerto ${app.get('port')}`); //pone asi porque despues se puede obtener 
                                                          //desde cualquier parte de la aplicacion
});




