import {publicGetService} from '../connection/get.method.service.ts';

function gettingPokemon(){
    publicGetService('https://pokeapi.co/api/v2/pokemon/pikachu').then((response:{name:string})=>{
        console.log(response.name);
    });
}

export {
    gettingPokemon,
};
