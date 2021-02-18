import React from 'react'

const Experience = () => {
   return (
      <section className='exp'>
         <h2 className='exp__title title'>Experience</h2>
         <ExperienceItem 
            position='Sinior Ux Designer - Present'
            company='Company Name/ Location'
            description = {`Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's standard`}
            />
         <ExperienceItem 
            position='Creative User Interface Designer - 2016'
            company='Company Name/ California USA'
            description = {`Lorem Ipsum is simply dummy text of the printing 
            and typesetting industry. Lorem Ipsum has been the industry's standard`}
            />
      </section>
   )
}

const ExperienceItem = (props) => {
   return (
      <div className='exp__item'>
         <h3 className='exp__position '>{props.position}</h3>
         <h3 className='exp__company '>{props.company}</h3>
         <div className='exp__description '>{props.description}</div>
      </div>
   )
}

export default Experience