import React from 'react';
import { Link } from 'react-router-dom';

const navbar =() =>{
  return (
    <div>
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
    <Link to={"/"} className='container-fluid justify-content-start navbar-brand m-2'> Todo App </Link>
    </nav>
    </div>
  )
};

export default navbar;