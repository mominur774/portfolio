import React from 'react';
import {
  BsGithub,
  BsLinkedin,
  BsStackOverflow,
  BsFacebook,
  BsInstagram
} from 'react-icons/bs';

const Navbar = () => {
  return (
    <div className="container pt-3">
      <div className='d-flex justify-content-between align-items-start'>
        <div className='intro mb-5'>
          <h2 className='name'>Mominur Rahman</h2>
          <span className='designation'>A Full-stack Developer</span>
        </div>
        <div className='social-icons d-flex gap-3'>
          <div className='social-icon'>
            <BsGithub className='icon' />
          </div>
          <div className='social-icon'>
            <BsLinkedin className='icon' />
          </div>
          <div className='social-icon'>
            <BsFacebook className='icon' />
          </div>
          <div className='social-icon'>
            <BsInstagram className='icon' />
          </div>
          <div className='social-icon'>
            <BsStackOverflow className='icon' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar