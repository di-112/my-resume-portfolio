import React from 'react'
import htmlImg from '../../image/html.png'
import cssImg from '../../image/css3.png' 
import jsImg from '../../image/js.png'  
import reactImg from '../../image/react.png' 
import reduxImg from '../../image/redux.png' 

const checkMark = 'https://webcomicms.net/sites/default/files/clipart/127381/checkmark-cliparts-127381-311063.png'

const ProSkills = () => {
   return (
      <section className='proSkills'>
         <h2 className='proSkills__title title'>Навыки</h2>
         <ul>
            <ul>
            <li className='proSkills__skill'>html <img src={''} alt=""/> </li>
            <li className='proSkills__skill'>css <img src={''} alt=""/> </li>
            <li className='proSkills__skill'>JavaScript <img src={''} alt=""/> </li>
            <li className='proSkills__skill'>scss <img src={''} alt=""/> </li>
            </ul>
            <ul>
            <li className='proSkills__skill'>react js (+ redux) <img src={''} alt=""/> </li>
            <li className='proSkills__skill'>git (github)<img src={''} alt=""/> </li>
            <li className='proSkills__skill'>webpack (базовый уровень)<img src={''} alt=""/> </li>
            </ul>
         </ul>
      </section>
   )
}

export default ProSkills