import React, { useState } from 'react';

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const register = () => {

    const [action, setAction] = useState("Login");

    return (
        <div className='container'>
            <div className="title">TETRIS BLOCK PUZZLE</div>
            <div className='header'>
                <div className="text">Register</div>
                <div className="underline"></div>
            </div>
            
            <div className="inputs">
            <div className="inputs">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Email' />
            </div>

            </div>
        </div>
    )

}