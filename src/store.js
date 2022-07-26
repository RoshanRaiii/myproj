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
const store = createStore(rootReducer, loadFromLocalStorage(), composeWithDevTools());
    // persistedReducer, /* preloadedState, */
  // convert object to string and store in localStorage
function saveToLocalStorage(state) {
    try {
      const serialisedState = JSON.stringify(state);
      localStorage.setItem("persistantState", serialisedState);
    } catch (e) {
      console.warn(e);
    }
  }
  
  // load string from localStarage and convert into an Object
  // invalid output must be undefined
  function loadFromLocalStorage() {
    try {
      const serialisedState = localStorage.getItem("persistantState");
      if (serialisedState === null) return undefined;
      return JSON.parse(serialisedState);
    } catch (e) {
      console.warn(e);
      return undefined;
    }
  }
  
  // create our store from our rootReducers and use loadFromLocalStorage
  // to overwrite any values that we already have saved
  
  // listen for store changes and use saveToLocalStorage to
  // save them to localStorage
  store.subscribe(() => saveToLocalStorage(store.getState()));
  

//  export const persistor = persistStore(store);
export default store;