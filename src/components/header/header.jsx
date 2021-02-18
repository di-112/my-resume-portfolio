import React from 'react'
import phoneImg from '../../image/phone_561.png' 
import gmailImg from '../../image/gmail_560.png' 
import githublImg from '../../image/github.png' 

const Header = () => {
   return (
      <header className='header'>
         <div className="header__content">
            <div className="header__contacts">
               <Contact image={phoneImg} contact='8-800-555-35-35'/>
               <Contact image={gmailImg} contact='di150499gmail.com'/>
               <Contact image={githublImg} contact='di_112'/>
            </div>
         </div>
         <div className='header__img'>

         </div>
      </header>
   )
}

const Contact = (props) => {
   return (
      <div className='header__contact'>
         <img src={props.image} alt='not image'/>
         <span>{props.contact}</span>
      </div>
   )
}

export default Header