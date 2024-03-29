import React, { useState } from 'react'
import './Contact.scss';

import Shake from '../assets/shake.svg';

export default function Contact() {
  const [ message, setMessage ] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  }

  return (
    <div className='contact' id='contact'>
      <div className="left">
        <img src={Shake} alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Email' />
          <textarea placeholder='Message'></textarea>
          <button type='submit'>Send</button>
          { message && <span>Thanks, i'll reply ASAP.</span> }
        </form>
      </div>
    </div>
  )
}
