const {io} = require('../index');


//mensajes de sockets
io.on('connection', client => {
    console.log('Al fin se conecto alguien a esta monda perro hpta');


    client.on('disconnect', () => { 
        console.log('cliente desconectado asi que abrete que tu pagina vale verga');
     });

    client.on('mensaje', ( payload ) => {
        console.log('Mensaje!', payload);

        io.emit( 'mensaje', {admin: 'Gybram es el admin =D'});
    })


});