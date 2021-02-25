import React from 'react'
import myPhoto from '../../image/myPhoto.png'

const Me = () => {
   return (
      <div className='me'>
         <div className='me__name'>
            <span className='me__firstName'>Везанкин</span>
            <span className='me__lastName'>Дмитрий</span>
            <span className='me__profession'>Junior frontend developmer</span>
         </div>
         {/* <div className='me__img' >
          <img src={myPhoto} alt='not photo'/>
         </div> */}
      </div>
   )
}

export default Me