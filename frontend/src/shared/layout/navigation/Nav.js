import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import NavDrawer from './NavDrawer';
import NavLinks from './NavLinks';
import Backdrop from '../../backdrop/Backdrop';
import './Nav.css';

const Nav = (props) => {

    const [navIsOpen, setNavIsOpen] = useState(false);

    const openNav = () => {
        setNavIsOpen(true);
    };

    const closeNav = () => {
        setNavIsOpen(false);
    }

    //Listens to browser resize event & if the navDrawer State is open, then it resets the state to close the navDrawer
    useEffect(()=> {
        const resizeNavStateHandler = () => {
            if(navIsOpen){
                closeNav();
                console.log('closedNav')
            }
        }
        //Set Resize Event Listener
        window.addEventListener('resize', resizeNavStateHandler);

        //Clean Up - remove the event listener
        return () => {
            window.removeEventListener('resize', resizeNavStateHandler);
        }
    }, [navIsOpen])



    return(
        <React.Fragment>
            {navIsOpen && <Backdrop onClick={closeNav}/>}
            {navIsOpen && (
                <NavDrawer show={navIsOpen}>
                    <nav className='navDrawer' onClick={closeNav}>
                        <NavLinks/>
                    </nav>
                </NavDrawer>
            )}                 
            <FontAwesomeIcon className='navMenuButton' size='2xl' icon={navIsOpen ? faX : faBars} onClick={openNav}/>
            <nav className='navBar'>
                <NavLinks/>
            </nav> 
        </React.Fragment>
    )
}

export default Nav;