import React from 'react';
import './Avatar.css';


//pass in the alt and image prop into this component
const Avatar = (props) => {
  return (
    <div className={`avatar ${props.className}`} style={props.style}>
        <img src={props.image} alt={props.alt} style={{ width: props.width, height: props.height}}/>
    </div>
  )
}

export default Avatar;