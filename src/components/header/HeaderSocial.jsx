import React from 'react'
 import {AiFillLinkedin ,AiFillGithub,AiFillFacebook} from 'react-icons/ai'
const HeaderSocial = () => {
  return (
    <div className='header_socials'>
        <a href="https://linkedin" target="_blank">
    <AiFillLinkedin />
        </a>
        <a href="#" target="_blank"><AiFillGithub/></a>
        <a href="#" target="_blank"><AiFillFacebook/></a>
    </div>
  )
}

export default HeaderSocial