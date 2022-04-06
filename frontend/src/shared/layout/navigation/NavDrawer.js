import React from 'react';
import ReactDOM from 'react-dom';
import {CSSTransition} from 'react-transition-group';
import './NavDrawer.css';

const NavDrawer = (props) => {
    const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-right"
      mountOnEnter
      unmountOnExit
      >

      <aside className='navDrawer'>{props.children}</aside>
    </CSSTransition>);

  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
};

export default NavDrawer;