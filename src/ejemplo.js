
const argv = require('./config/yargs').argv;
const persona = require('./src/form-perso');
const colors =  require('colors');

let comando = argv._[0];

app.set('port',process.env.PORT || 3000); 

// middlewares 

app.use(express.urlencoded({extended: false})); 
app.use(express.json());      

// routes  
app.get('/',(req, res) => {
     

});

// Empezando el servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor en puerto ${app.get('port')}`); 
});




