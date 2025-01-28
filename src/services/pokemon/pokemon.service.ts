import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Pokemon} from '../../interfaces/pokemon.type.ts';
import {REHYDRATE} from 'redux-persist';
import type {Action} from '@reduxjs/toolkit';

function isHydrateAction(action: Action): action is Action<typeof REHYDRATE> & {
  key: string;
  payload: any;
  err: unknown;
} {
  return action.type === REHYDRATE;
}

export const pokemon = createApi({
  reducerPath: 'pokemon',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pokeapi.co/api/v2/',
  }),
  extractRehydrationInfo(action, {reducerPath}): any {
    if (isHydrateAction(action)) {
      if (action.key === 'pokemon') {
        return action.payload;
      }
      return action.payload[reducerPath];
    }
  },
  endpoints: builder => ({
    getPokemonByName: builder.query<Pokemon, string>({
      query: name => `pokemon/${name}`,
    }),
  }),
});
