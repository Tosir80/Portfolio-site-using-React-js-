import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id="experience" className='experience'>
      <h5>What Skills I Have</h5> 
      <h2>My Experience</h2>
      <div className='container experience_container'>
        <div className="experience_frontend">
          <h3>Frontend Development</h3> 
          <div className='experience_content'>
            <article className='experience-details'>
              <BsFillPatchCheckFill className="experience-details-icon"/>
             <div>
             <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
             </div>
            </article>
            <article className='experience-details'>
              <BsFillPatchCheckFill className="experience-details-icon"/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsFillPatchCheckFill className="experience-details-icon"/>
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsFillPatchCheckFill className="experience-details-icon"/>
             <div>
             <h4>Tailwind</h4>
              <small className='text-light'>Experienced</small>
             </div>
            </article>
            <article className='experience-details'>
              <BsFillPatchCheckFill className="experience-details-icon"/>
             <div>
             <h4>Javascript</h4>
              <small className='text-light'>Intermediate</small>
             </div>
            </article>
            <article className='experience-details'>
              <BsFillPatchCheckFill className="experience-details-icon"/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* fontend end */}
        <div className="experience_frontend">
          <h3>Backend Development</h3> 
          <div className='experience_content'>
            <article className='experience-details'>
              <BsFillPatchCheckFill className="experience-details-icon"/>
            <div>
            <h4>Node Js</h4>
              <small className='text-light'>Basic</small>
            </div>
            </article>
            <article className='experience-details'>
              <BsFillPatchCheckFill className="experience-details-icon"/>
              <div>
              <h4>Express Js</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsFillPatchCheckFill className="experience-details-icon"/>
             <div>
             <h4>MongoDB</h4>
              <small className='text-light'>Experienced</small>
             </div>
            </article>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience