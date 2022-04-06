import React from 'react';
import './Layout.css';
import Title from '../title/Title';
import Nav from './navigation/Nav';

const Layout = (props) => {
  return (
    <header className='layout'>
      <Title/>
      <Nav/>
    </header>
  )
}

export default Layout;