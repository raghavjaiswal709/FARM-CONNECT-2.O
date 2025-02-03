import React from 'react'
import "../LandingHeader/landingHeader.css"

const LandingHeader = () => {
  return (
    <header className='header-LandingNav'>
        <nav className='LandingHeaderNav2'>
            <h1 className='LandingHeaderHeading'>Farm-Connect</h1>

            <div className='register-section'>
                <a className='LandingHeaderLink' href='/LandingPageLogin' >Login</a>
                <a className='LandingHeaderLink' href='/LandingPageRegister'>Register</a>
            </div>
        </nav>
    </header>
  )
}

export default LandingHeader
