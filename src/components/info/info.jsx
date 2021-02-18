import React from 'react'
import Education from './education'
import Experience from './experience'
import Profile from './profile'
import ProSkills from './proSkills'


const Info = () => {
   return (
      <section className='info'>
         <div className='info__column1'>
           
            <ProSkills />
         </div>
         <div className='info__column2'>
            <Profile />
            <Education />
         </div>
      </section>
   )
}

export default Info