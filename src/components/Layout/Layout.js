import React from 'react';
import { Navbar } from '../Header';

const Layout = ({ children }) => {
  return (
    <div className='main-content'>
      <div className="overlay"></div>
      <Navbar />
      <hr className='mb-0' />
      <div className='container'>
        {children}
      </div>
    </div>
  )
}

export default Layout