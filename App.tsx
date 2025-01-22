import React, {useEffect} from 'react';
import {gettingPokemon} from './src/services/pokemon/pokemon.service.ts';
function App(): React.JSX.Element {
  useEffect(()=>{
    gettingPokemon();
  },[]);

  return(<></>);
}
export default App;
