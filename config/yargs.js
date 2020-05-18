const argv = require('yargs')
            .command('agregar', 'agrega un persona ',{
                rut: {
                    demand:true,
                    alias:'r',
                    rut: 'rut de la persona'
                },
                nombres: {
                    demand:true,
                    alias:'n',
                    nombres: 'nombres de la persona'
                },
                apellidoPaterno: {
                    demand:true,
                    alias:'ap',
                    apellidoPaterno: 'rut de la persona'
                },
                apellidoMaterno: {
                    demand:true,
                    alias:'am',
                    apellidoMaterno: 'rut de la persona'
                }
            })
            .command('actualizar','Actualiza la información de la persona',{
                rut: {
                    demand:true,
                    alias:'r',
                    rut: 'rut de la persona'
                },
                nombres: {
                    demand:true,
                    alias:'n',
                    nombres: 'nombres de la persona'
                },
                apellidoPaterno: {
                    demand:true,
                    alias:'ap',
                    apellidoPaterno: 'Apellido Paterno de la persona'
                },
                apellidoMaterno: {
                    demand:true,
                    alias:'am',
                    apellidoMaterno: 'Apellido Materno de la persona'
                }
            })    
            .command('borrar','Borra la información de la persona',{
                rut: {
                    demand:true,
                    alias:'r',
                    rut: 'rut de la persona'
                },
                nombres: {
                    demand:true,
                    alias:'n',
                    nombres: 'nombres de la persona'
                },
                apellidoPaterno: {
                    demand:true,
                    alias:'ap',
                    apellidoPaterno: 'Apellido Paterno de la persona'
                },
                apellidoMaterno: {
                    demand:true,
                    alias:'am',
                    apellidoMaterno: 'Apellido Materno de la persona'
                }
            })
            .help()
            .argv;

module.exports = {
    argv
}            