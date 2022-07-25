import React from 'react';
import Input from '../shared/formElements/Input';
import '../shared/formElements/FormStyle.css';
import Button from '../shared/formElements/Button';

const Contact = (props) => {
  return (
    <form className='formStyle' method='POST' action='send'>
      <h2>Contact Me</h2>
      <p>Tell me about your project</p>
      <Input element='input' type='text' placeholder='First Name' />
      <Input element='input' type='text' placeholder='Last Name' />
      <Input element='input' type='email' placeholder='Email' />
      <Input element='textarea' />
      <Button>Submit</Button>
    </form>
  );
};

export default Contact;
