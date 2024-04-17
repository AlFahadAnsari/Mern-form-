import React from 'react'
// import Link from  'react-router-dom';
import { Link } from 'react-router-dom';
import Signup from './Signup';

const Navbar = () => {
  return (
    <div>
<nav className="navbar navbar-expand-lg bg-body-tertiary px-5">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
   <div className='btns'>
   <Link to={'/signup'} className="btn btn-danger mx-3 ">Signup</Link>
   <Link to={'/login'} className="btn btn-warning ">login</Link>
   </div>
    
    
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar