import { configureStore} from "@reduxjs/toolkit";

import todoSlice from './reducer/todoReducer';
import { composeWithDevTools } from 'redux-devtools-extension';


const store = configureStore({
  reducer:{
      TODO : todoSlice,
  },
  composeWithDevTools,

});

export default store;