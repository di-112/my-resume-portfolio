import React from 'react'

const Education = () => {
   return (
      <section className="education">
         <h2 className="education__title title">Образование</h2>
         <EducationItem years='2016-2020' 
         place='НИУ МИЭТ (Московский Институт Электронной Техники) 
                МПИСУ
                "Инфоматика и вычистлительная техника"'/>
      </section>
   )
}

const EducationItem = (props) => {
   return (
      <div className="education__item">
         <h3 className="education__years">{props.years}</h3>
         <h3 className="education__place">{props.place}</h3>
      </div>
   )
}

export default Education