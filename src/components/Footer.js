import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return ( 
    <section className='footer'>
      <div className='footer-text'>
        Follow Me 
      </div>
      <div className='social-media-icons'>
        <a href='https://www.facebook.com/hamza.zu.12' target='new-tab'><BsFacebook/></a>
        <a href='https://www.instagram.com/hamzazuberi18/' target='new-tab'><BsInstagram/></a>
        <a href='https://twitter.com/halalberi' target='new-tab'><BsTwitter/></a>
        <a href='https://github.com/hamzagik' target='new-tab'><BsGithub/></a>
        <a href='https://www.linkedin.com/in/hamza-ahmed-zuberi-953059222/' target='new-tab'><BsLinkedin/></a>
      </div>
      <div className='footer-text-bottom'>
        © Hamza Ahmed Zuberi
      </div>
    </section>
  )
}

export default Footer
