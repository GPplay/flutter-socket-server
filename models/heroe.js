const {v4: uuidV4} = require('uuid');


class Heroe{
    constructor(name = 'no-name'){
        this.id = uuidV4(); //se crea identificador unico 
        this.name = name;
        this.vote = 0;
    }
}

module.exports = Heroe;