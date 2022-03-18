import React from 'react'
import './footer.css'
import{AiFillFacebook, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Tosir</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonails">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.facebook.com/profile.php?id=100008368427419" target="_blank"><AiFillFacebook/></a>
        <a href="https://www.instagram.com/tosir10/" target="_blank"><AiFillInstagram/></a>
        <a href="https://www.linkedin.com/in/tosiruzzaman-tosir-3306a6182/" target="_blank"> <AiFillLinkedin/></a>
      </div>

      <div className="footer_copyright">
        <small>All rights reserved by &copy;Tosir 2022 </small>
      </div>
    </footer>
  )
}

export default Footer