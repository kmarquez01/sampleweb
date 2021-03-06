

import Link from 'next/link'

import {useRouter} from "next/router"

function Footer(){

    return (
        <div className='footer-container'>
        <section className='footer-subscription'>
          <p>
            Keep in touch with future updates and coupons!
          </p>
          <div className='input-areas'>
            <form>
              <input
                className='footer-input'
                name='email'
                type='email'
                placeholder='Your Email'
              />
            </form>
          </div>
        </section>
        <div className='footer-links'>
          <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
              <h2>About Us</h2>
              <Link href="About/#WhoWeAre">Who we are</Link>
              <Link href = "About/#Locations" >Locations</Link>
              <Link href="About/#contact">Contact</Link>
            </div>
            <div className='footer-link-items'>
              <h2>Social Media</h2>
              <Link href="/">Instagram</Link>
              <Link href="/">Facebook</Link>
              <Link href="/">Youtube</Link>
            </div>
          </div>
        </div>
        <section className='social-media'>
          <div className='social-media-wrap'>
            <div className='footer-logo'>
              <Link href="/" className='social-logo'>
                <div className = "social-logo">
                  Lafu
                  <i className='fab fa-typo3' />
                </div>
              </Link>
            </div>
            <small className='website-rights'>Lafu © 2020</small>
          </div>
        </section>
      </div>
    );
  }



export default Footer