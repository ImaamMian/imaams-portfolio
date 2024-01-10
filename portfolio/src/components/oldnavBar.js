import React, {useState} from'react';
import '../navBar.css'

function Navbar(){
  const [active, setActive] = useState('navMenu')
  const [icon, setIcon] = useState('toggler')

  const navToggle = () =>{
    active === 'navMenu' ? setActive('navMenu navActive') : setActive('navMenu')

    if (icon === "toggler") {
      setIcon("toggler toggle");
    } else setIcon("toggler");
  };



  return(
    <nav className='nav'>
      <a href = '#' className='name'>Imaams Portfolio</a>
      <ul className={active}>
        <li className='item'><a href ='#' className='navLink'>About</a></li>
        <li className='item'><a href ='#' className='navLink'>Skills</a></li>
        <li className='item'><a href ='#' className='navLink'>Experience</a></li>
        <li className='item'><a href ='#' className='navLink'>Projects</a></li>
        <li className='item'><a href ='#' className='navLink'>Education</a></li>
      </ul>

      <div onClick= {navToggle} className={icon}>
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>
      </div>
    </nav>
  );
}

export default Navbar;