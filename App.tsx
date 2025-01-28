import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store.ts';
import Pokemon from './src/pages/pokemon/pokemon.tsx';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <Pokemon />
    </Provider>
  );
}
export default App;
