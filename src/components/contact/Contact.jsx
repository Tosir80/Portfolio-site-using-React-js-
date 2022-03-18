import React, { useRef } from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
 import emailjs from 'emailjs-com'
const Contact = () => {

const form =useRef()
const sendEmail=(e)=>{
  e.preventDefault()
  emailjs.sendForm('service_qmh1qan','template_p2g64xu',form.current,'user_cAlQNU0603eZid5f49ASl')
  e.target.reset()
}



  return (
    <section id="contact">
      <h5 >Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className=" container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail contact_icon/>
            <h4>Email</h4>
            <h5 className='text-light'>tosiruzzamantosir@gmail.com</h5>
            <a href="mailto:tosiruzzamantosir@gmail.com">Send a message</a>
          </article>
          <article className="contact_option">
            <RiMessengerLine contact_icon/>
            <h4>Messenger</h4>
            <h5 className='text-light'>tosiruzzamantosir@gmail.com</h5>
            <a href="https://m.me/profile.php?id=100008368427419" target="_blank" >Send a message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp contact_icon/>
            <h4>Email</h4>
            <h5 className='text-light'>+8801779794012</h5>
            <a href="https://api.whatsapp.com/send?phone+8801779794012" target="_blank">Send a message</a>
          </article>
        </div>
        {/* -------from */}
        <form action="" ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name ' required />
          <input type="email" name="email" placeholder='Your Email ' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact