import {createStore} from 'redux';
import rootReducer from './reducer/todoReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig={
//   key: 'root',
//   storage,
// };
// const persistedReducer=persistReducer(persistConfig,rootReducer);
const store = createStore(rootReducer, composeWithDevTools());
    // persistedReducer, /* preloadedState, */
  

//  export const persistor = persistStore(store);
export default store;