import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import "./App.css";
import Navbar from './components/navbar';
import Home from './components/home';
import EditForm from './components/editform';
import PageNotFound from './components/PageNotFound';
const App=()=> {
  return (
    <div className="App">
      < Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/edit/:id' element={<EditForm />}/>
        <Route path='*'exact element={<PageNotFound/>}/>
      </Routes>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: '1 rem',
          },
        }}
      />
    </div>
  );
}

export default App;
