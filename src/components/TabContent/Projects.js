import React from 'react';
import { projects } from '@/dummy';
import Link from 'next/link';

const Projects = () => {
  return (
    <div className='projects mb-5'>
      <span className='d-block mb-5'>
      As a Full Stack Developer with 1.5+ years of experience, my approach to every project is rooted in a passion for innovation and problem-solving. I thrive on the challenge of transforming ideas into user-centric solutions. Here's how I approach projects
      </span>
      <div className="row">
        {projects.length > 0 && projects.map((project, idx) => (

          <Link target='_blank' href={project.link} key={idx} className="col-lg-4 col-md-6 col-sm-12 project my-3">
            <span className='d-block mb-3'>{project.name}</span>
            <img className='w-100' src={project.thumbnail.src} alt="" />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Projects