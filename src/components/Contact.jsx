import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
    <div className=" container contact" id='contact'>
        <h1>Contact ME</h1>
        <div className="contact-icon"
        data-aos="zoom-in-up"
        data-aos-duration="1000">
            <a href="www.google.com" target='_blank' className="items">
                <FaInstagramSquare className='icons'  />
            </a>
            <a href="www.google.com" target='_blank' className="items">
                <CiFacebook className='icons'  />
            </a>
            <a href="www.google.com" target='_blank' className="items">
                <CiLinkedin className='icons' />
            </a>
            <a href="www.google.com" target='_blank' className="items">
                <FaGithubSquare className='icons' />
            </a>
            <a href="mailto:malakarabhishek@gmail.com" target='_blank' className="items">
                <SiGmail className='icons' />
            </a>
        </div>
    </div>
    </>
  )
}

export default Contact
