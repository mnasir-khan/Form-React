import React from 'react'
import './Loginform.css'
const Loginform = () => {
  return (
    <div className='container'>
        <div className="header">
            <div className="text">Form</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
                <input type="text" placeholder='Name' />
            </div>
            <div className="input">
                <input type="email" placeholder='Work Email'/>
            </div>
            <div className="input">
                <input type="password" placeholder='Password' />
            </div>
            <div className="input">
                <input type="text" placeholder='Organization Name'/>
            </div>
            <div className="input">
                <input type="text" placeholder='Country Name'/>
            </div>
        </div>
        <div className="submit-container">Submit</div>
    </div>
  )
}

export default Loginform
