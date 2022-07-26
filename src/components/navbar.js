import React from 'react';
import { Link } from 'react-router-dom';

const navbar =() =>{
  return (
    <div>
    <nav className='navbar navbar-expand-lg navbar-dark' style={{backgroundColor : '#66BFBF'}}>
    <Link to={"/"} className='container-fluid justify-content-center navbar-brand m-2'> <b>Todo App</b> </Link>
    </nav>
    </div>
  )
};

export default navbar;