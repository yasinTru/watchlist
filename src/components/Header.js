import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
  return(
    <header>
    <div className='container'>
      <div className='inner'>
        <div className='logo'>
          <Link to='/main'> Watchlist App</Link>
        </div>

        <ul className="navs">
          <li><Link to='/watchlist'>Watch List</Link></li>
          <li><Link to='/finished'>Watched</Link></li>
          <li><Link to='/main' className='btn btn-add'>+ Add</Link></li>

        </ul>
        </div>
        </div>
    </header>
  ) 
  
}

export default Header;
