import React from 'react'
import farmer from '../../farmer.png'
import './Navbar.scss';

const Navbar = ({account}) => {  

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img data-testid="navbar-img" src={farmer} className="navbar-img" alt="" />
        <h1 data-testid="navbar-brand-title" className="navbar-brand-title">DApp Token Farm</h1>
      </div>
      
      <div className="nav-account">
        <p data-testid="account" className="text-secondary" id="account">
          {account}
        </p>
      </div>
      
    </nav>
  );
  
}

export default Navbar;
