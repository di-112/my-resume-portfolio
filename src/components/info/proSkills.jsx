import React from 'react'

const proSkills = ['html', 'css', 'JavaScript', 'scss', 
'bootstrap 5 (базовый уровень)', 'react js (+ redux)',
'git (github)']

const ProSkills = () => {
   return (
      <section className='proSkills'>
         <h2 className='proSkills__title title'>Навыки</h2>
         <ul>
            <ul>{
               proSkills.map((skill, index)=>{ if(index<4) return <li className='proSkills__skill'>{skill}<img src={''} alt=""/> </li> })
            }</ul>
            <ul>{
               proSkills.map((skill, index)=>{ if(index>3) return <li className='proSkills__skill'>{skill}<img src={''} alt=""/> </li> })
            }</ul>
         </ul>
      </section>
   )
}

export default ProSkills