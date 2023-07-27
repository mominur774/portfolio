import React from 'react';
import { projects } from '@/dummy';
import Link from 'next/link';

const Projects = () => {
  return (
    <div className='projects mb-5'>
      <span className='d-block mb-5 text-center'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
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