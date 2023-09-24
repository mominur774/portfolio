import React from 'react'

const About = () => {
  return (
    <div className='about row'>
      <div className='col-lg-7 description'>
        <span className='d-block mb-3'>I am Mominur Rahman, a dedicated Full Stack Developer with a passion for crafting elegant and efficient web applications. With over 1.5 years of hands-on experience, I have honed my skills in leveraging the power of Django and React to build robust, user-friendly, and scalable digital solutions.</span>
        <span className='d-block mb-3'>I am committed to delivering high-quality software that not only meets but exceeds client expectations. My dedication to staying up-to-date with the latest industry trends and technologies ensures that I am well-equipped to tackle any project.</span>
      </div>
      <div className="video-content col-lg-5">
        <div className="video">
          <video autoPlay muted className='w-100'>
            <source src='./videos/thumbnail.mp4' type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  )
}

export default About