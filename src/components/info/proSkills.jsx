import React from 'react'

const proSkills = ['HTML5', 'CSS3 (БЭМ методология,', 'flexbox, Grid layout)', 'SASS/SCSS', 'Avacode/Marsy',
'JavaScript (ECMAScript 6)',
'React js (+ Redux)',
'Пакетный менеджер NPM',
'REST API',
'Git (Github)']

const ProSkills = () => {
   return (
      <section className='proSkills'>
         <h2 className='proSkills__title title'>Навыки</h2>
         <ul>
            <ul>{
               proSkills.map((skill, index)=>{ if(index<5) return <li className='proSkills__skill'>{skill}<img src={''} alt=""/> </li> })
            }</ul>
            <ul>{
               proSkills.map((skill, index)=>{ if(index>4) return <li className='proSkills__skill'>{skill}<img src={''} alt=""/> </li> })
            }</ul>
         </ul>
      </section>
   )
}

export default ProSkills