import React from 'react';
import { majorSkills, otherSkills } from '@/dummy';

const Skills = () => {
  return (
    <div className='skills mb-5'>
      <span className='d-block mb-3'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
      </span>
      <div className="row">
        <div className='title my-4'>
          <h4 className=''>Main Skills</h4>
          <div className="separator"></div>
        </div>
        {majorSkills.map((skill, idx) => (
          <div key={idx} className="skill col-lg-6 col-md-6 col-sm-12">
            <span className='d-block mb-1 skill-label'>{skill.label}</span>
            <div className="progress">
              <div className="progress-bar main" role="progressbar" style={{ 'width': `${skill.level}%` }} aria-valuenow={skill.level} aria-valuemin="0" aria-valuemax="100">{skill.level}%</div>
            </div>
          </div>
        ))}
        <div className='title my-4'>
          <h4 className=''>Other Skills</h4>
          <div className="separator"></div>
        </div>
        {otherSkills.map((skill, idx) => (
          <div key={idx} className="skill col-lg-6 col-md-6 col-sm-12">
            <span className='d-block mb-1 skill-label'>{skill.label}</span>
            <div className="progress">
              <div className="progress-bar others" role="progressbar" style={{ 'width': `${skill.level}%` }} aria-valuenow={skill.level} aria-valuemin="0" aria-valuemax="100">{skill.level}%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills