import React from 'react'
import './about.css'
import AboutImg from '../../assets/me-about.jpg'
import {FiAward, FiUsers} from 'react-icons/fi'
import { BiFolderOpen } from 'react-icons/bi'
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about_container'>
        <div className='about_me'>
          <div className="about_me_image">
            <img src={AboutImg} alt="about img" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FiAward className='about_icon'/>
            <h5>Experience</h5>
            <small>1+ Years Working</small>
            </article>
       
        
            <article className='about_card'>
              <FiUsers className='about_icon'/>
            <h5>Clients</h5>
            <small>100+ Worldwide</small>
            </article>
         
          
            <article className='about_card'>
              <BiFolderOpen className='about_icon'/>
            <h5>Projects</h5>
            <small>80+ Completed</small>
            </article>
          </div>
          
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, ut molestias explicabo architecto deleniti rem, dignissimos iste provident voluptatibus sunt, culpa ipsa assumenda eveniet qui reiciendis inventore ab? Consequatur, expedita.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About