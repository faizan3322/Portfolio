import React from 'react'
import './Contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  return (
    <div className='container'>
        <div className="row">
            <div className="col-12 col-md-6 text-light">
                <h1>LET'S CONNECT</h1>
                <div className=' p-0 m-0 mail'>
                    <p className='text-white-50 '>Say Hello To The</p>
                    <p ><a  href="mailto:faizanqureshi2212@gmail.com">faizanqureshi2212@gmail.com</a></p>
                </div>
                <div className='d-flex mail'>
                    <p className='text-white-50'>For more info, Here is my</p>
                    <p ><a  href="/public/Muhammad Faizan CV.pdf" download='Muhammad Faizan CV.pdf'>Resume</a></p>
                </div>
                <div className='d-flex justify-content-center gap-4 fs-3 mt-5 align-items-center'>
                <a href="https://www.linkedin.com/in/muhammad-faizan2233/" target='_blank'><FontAwesomeIcon className="fontIcon" icon={faLinkedinIn}/></a>
                <a href="https://www.facebook.com/MuhammadFaizan3322?mibextid=ZbWKwL" target='_blank'><FontAwesomeIcon className="fontIcon" icon={faInstagram}/></a>
                <a href=" https://x.com/Mohamma40077647?s=08 " target='_blank'><FontAwesomeIcon className="fontIcon" icon={faXTwitter}/></a>
                <a href="https://www.instagram.com/muhammad.faizan._/profilecard/?igsh=OGdvN3FodHZzbHZ1" target='_blank'><FontAwesomeIcon className="fontIcon" icon={faFacebook}/></a>
                </div>
            </div>
            <div className="col-12 col-md-6">
                <form action="post" className=''>
                    <label className='text-white-50 mb-3 ' htmlFor="name">Name</label> <br/>
                    <input className='form-control mb-3 ' type="text" name='name' />

                    <label className='text-white-50 mb-3 ' htmlFor="email">Email</label> <br/>
                    <input className='form-control mb-3 ' type="email" name='email' />

                    <label className='text-white-50 mb-3' htmlFor="subject">Subject</label> <br/>
                    <input className='form-control mb-3' type="text" name='subject' />

                    <label className='text-white-50 mb-3' htmlFor="message">Message</label> <br/>
                    <textarea className='form-control mb-3' name="message" id="" ></textarea>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}
