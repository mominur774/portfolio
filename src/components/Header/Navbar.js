import React from 'react';
import {
  BsGithub,
  BsLinkedin,
  BsStackOverflow,
  BsFacebook,
  BsInstagram
} from 'react-icons/bs';

import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="container pt-3">
      <div className='d-flex flex-wrap justify-content-between align-items-start mb-5'>
        <div className='intro mb-4'>
          <h2 className='name'>Mominur Rahman</h2>
          <span className='designation'>A Full-stack Developer</span>
        </div>
        <div className='social-icons d-flex gap-3'>
          <Link href="https://github.com/mominur774" target='_blank' className='social-icon'>
            <BsGithub className='icon' />
          </Link>
          <Link href="https://www.linkedin.com/in/mominur-rahman-bb0768211/" target='_blank' className='social-icon'>
            <BsLinkedin className='icon' />
          </Link>
          <Link href="https://www.facebook.com/mdmominur.islam.18400/" target='_blank' className='social-icon'>
            <BsFacebook className='icon' />
          </Link>
          <div className='social-icon'>
            <BsInstagram className='icon' />
          </div>
          <Link href="https://stackoverflow.com/users/15272421/mominur-rahman" target='_blank' className='social-icon'>
            <BsStackOverflow className='icon' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar