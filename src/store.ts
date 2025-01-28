import {configureStore} from '@reduxjs/toolkit';
import {pokemon} from './services/pokemon/pokemon.service.ts';
import {setupListeners} from '@reduxjs/toolkit/query';

export const store = configureStore({
    reducer: {
        [pokemon.reducerPath]: pokemon.reducer,
        auth: pokemon.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemon.middleware),
});

export type RootState = ReturnType<typeof store.getState>

setupListeners(store.dispatch);
