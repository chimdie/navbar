import React, { useState } from 'react';
import './Navbar.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';


function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [click, setClick] = useState(false)

  const showSidebar = () => {
    setSidebar(!sidebar);
    setClick(!click)
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars' onClick={showSidebar}>
            {click ? <AiIcons.AiOutlineClose /> : <FaIcons.FaBars  />}
          </Link>
          <Link to='/' className='menu-bars'>
            Footy
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path} className='items'>
                    <span className='icon'>{item.icon}</span>
                    <span className='title'>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;