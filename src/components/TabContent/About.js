import React from 'react'

const About = () => {
  return (
    <div className='about row'>
      <div className='col-lg-7 description'>
        <span className='d-block mb-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</span>
        <span className='d-block mb-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</span>
      </div>
      <div className="video-content col-lg-5">
        <div className="video"></div>
      </div>
    </div>
  )
}

export default About