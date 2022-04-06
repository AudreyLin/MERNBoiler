import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavList } from './NavList';
import './NavLinks.css';


const NavLinks = (props) => {
    const navList = NavList.map(({url, title}, index) => {
        return (
            <li key={index} >
                <NavLink to={url}>
                    {title}
                </NavLink>
            </li>
        );
    });

    return (
        <nav className='navLinks'>
            {navList}
        </nav>
    )
};

export default NavLinks;