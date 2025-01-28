import {useGetPokemonByNameQuery} from '../../services/pokemon/pokemon.store.ts';
import {ActivityIndicator, Text} from 'react-native';
import React from 'react';

const Pokemon = () => {
  const {data, error, isLoading} = useGetPokemonByNameQuery('pikachu');
  if (error) {return <Text>Error !</Text>;}
  return isLoading ? <ActivityIndicator /> : <Text>{data?.species.name}</Text>;
};

export default Pokemon;
