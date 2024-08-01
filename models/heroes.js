const Heroe = require("./heroe");



class Heroes{
    constructor(){
        this.heroes = [];
    }

    addHeroe(heore = new Heroe() ){
        this.heroes.push(heore);
    }

    getHeroes(){
        this.heroes;
    }

    deleteHeroes(id = ''){
        this.heroes.filter( heroe => heroe.id !== id);
        return this.heroes;
    }

    voteHeroe( id  = ''){
        this.heroes = this.heroes.map(heroe => {

            if(heore.id === id){
                heore.vote++;
                return heroe;
            }else{
                return heroe;
            }

        });
    }
}

module.exports = Heroes;