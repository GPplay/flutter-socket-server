const {io} = require('../index');
const Heroe = require('../models/heroe');
const Heroes = require('../models/heroes');

const heroes = new Heroes();

heroes.addHeroe(new Heroe('batman'));
heroes.addHeroe(new Heroe('superman'));
heroes.addHeroe(new Heroe('megaman'));
heroes.addHeroe(new Heroe('wonderwoman'));

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

    //escuchar el evento "add-heroe"

    client.on('add-heroe', (payload)=>{
        const newHeroe = new Heroe(payload.name);
        heroes.addHeroe(newHeroe);
        io.emit('heroes-activos', heroes.getHeroes());
    });

    client.on('delete-heroe', (payload)=>{
        heroes.deleteHeroes( payload.id);
        io.emit('heroes-activos', heroes.getHeroes());
    });

    // client.on('emitir-mensaje', (payload)=> {
    //     console.log(payload);
    //     io.emit('nuevo-mensaje', payload); //emite a todos los clientes conectados
    //     client.broadcast.emit('nuevo-mensaje', payload); //emite a todos menos al cliente que esta mandando el mensaje
    // })


});