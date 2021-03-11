import React from 'react'
import phoneImg from '../../image/phone_561.png' 
import gmailImg from '../../image/gmail_560.png' 
import githublImg from '../../image/github.png' 

const Header = () => {
   return (
      <header className='header'>
         <div className="header__content">
            <div className="header__contacts">
               <Contact image={gmailImg} contact='di150499gmail.com' href='mailto:di150499@gmail.com'/>
               <Contact image={githublImg} contact='di-112' href='https://github.com/di-112?tab=repositories'/>
            </div>
         </div>
         <div className='header__img'>

         </div>
      </header>
   )
}

const Contact = (props) => {
   return (
      <a className='header__contact' target='_blank' href={props.href}>
         {props.image && <img src={props.image} alt='not image'/>}
         <span>{props.contact}</span>
      </a>
   )
}

export default Header