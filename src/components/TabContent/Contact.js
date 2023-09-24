import React from 'react';
import { MdLocationOn, MdEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact mb-5">
      <div className="row">
        <div className="col-lg-10 mx-auto">
          <span className='d-block text-center mb-5'>I am always open to new opportunities and collaborations. If you're looking for a passionate Full Stack Developer to join your team or have an exciting project in mind, feel free to reach out.</span>
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
              <div className='d-flex align-items-center gap-2 mb-4'>
                <div className="icon-box d-flex justify-content-center align-items-center">
                  <MdLocationOn className='icon' />
                </div>
                <div className="contact-info">
                  <span className='d-block'>Banasree, Dhaka, Bangladesh</span>
                </div>
              </div>
              <div className='d-flex align-items-center gap-2 mb-4'>
                <div className="icon-box d-flex justify-content-center align-items-center">
                  <FaPhoneAlt className='icon phone' />
                </div>
                <div className="contact-info">
                  <span className='d-block'>01831447102</span>
                </div>
              </div>
              <div className='d-flex align-items-center gap-2 mb-4'>
                <div className="icon-box d-flex justify-content-center align-items-center">
                  <MdEmail className='icon' />
                </div>
                <div className="contact-info">
                  <span className='d-block'>mominurrohman774@gmail.com</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
              <form action="">
                <div className="form-group mb-3">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                      <input
                        type="text"
                        name="first_name"
                        className='form-control'
                        id=""
                        placeholder='First name'
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <input
                        type="text"
                        name="last_name"
                        className='form-control'
                        id=""
                        placeholder='Last name'
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group mb-3">
                  <input
                    type="email"
                    name="email"
                    className='form-control'
                    id=""
                    placeholder='Email'
                  />
                </div>
                <div className="form-group mb-3">
                  <textarea n
                    ame="description"
                    id=""
                    cols="30"
                    rows="3"
                    placeholder='Description'
                    className='form-control'
                  ></textarea>
                </div>
                <button className='btn btn-primary w-100' type="submit">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact