const {io} = require('../index');
const Heroe = require('../models/heroe');
const Heroes = require('../models/heroes');

const heroes = new Heroes();

heroes.addHeroe(new Heroe('halconman'));
heroes.addHeroe(new Heroe('tigrenman'));
heroes.addHeroe(new Heroe('socialnman'));
heroes.addHeroe(new Heroe('nosequenman'));

console.log(heroes);

//mensajes de sockets
io.on('connection', client => {
    console.log('cliente conectado');

    client.emit('heroes-activos', heroes.getHeroes() );

    client.on('disconnect', () => { 
        console.log('cliente desconectado');
     });

    client.on('mensaje', ( payload ) => {
        console.log('Mensaje!', payload);

        io.emit( 'mensaje', {admin: 'Gybram es el admin =D'});
    })

    client.on('vote-heroe', (payload)=> {

        heroes.voteHeroe(payload.id);
        io.emit('heroes-activos', heroes.getHeroes() );
    });

    // client.on('emitir-mensaje', (payload)=> {
    //     console.log(payload);
    //     io.emit('nuevo-mensaje', payload); //emite a todos los clientes conectados
    //     client.broadcast.emit('nuevo-mensaje', payload); //emite a todos menos al cliente que esta mandando el mensaje
    // })


});