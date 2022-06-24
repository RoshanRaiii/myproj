import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';


import Navbar from './components/navbar';
import Home from './components/home';
import AddForm from './components/addform';
import EditForm from './components/editform';

const App=()=> {
  return (
    <div className="App">
      < Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/add' element={<AddForm />}/>
        <Route path='/edit/:id' element={<EditForm />}/>
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
