const Heroe = require("./heroe");



class Heroes{
    constructor(){
        this.heroes = [];
    }

    addHeroe(heroe = new Heroe() ){
        this.heroes.push(heroe);
    }

    getHeroes(){
        return this.heroes;
    }

    deleteHeroes(id = ''){
        this.heroes = this.heroes.filter( heroe => heroe.id !== id);
        return this.heroes;
    }

    voteHeroe( id  = ''){
        this.heroes = this.heroes.map(heroe => {

            if(heroe.id === id){
                heroe.vote++;
                return heroe;
            }else{
                return heroe;
            }

        });
    }
}

module.exports = Heroes;