import React from 'react'

const Education = () => {
   return (
      <section className="education">
         <h2 className="education__title title">Образование</h2>
         <EducationItem years='2016-2020' 
         university='НИУ МИЭТ'
         faculty='МПиТК'    
         speciality='Инфоматика и вычистлительная техника'/>
      </section>
   )
}

const EducationItem = (props) => {
   return (
      <div className="education__item">
         <h3 className="education__years">{props.years}</h3>
         <div className="education__place">{props.place}
            <h3 className="education__university"><span>ВУЗ: </span>{props.university}</h3>
            <h3 className="education__faculty"><span>Факультет: </span>{props.faculty}</h3>
            <h3 className="education__speciality"><span>Направление: </span>{props.speciality}</h3>
         </div>
      </div>
   )
}

export default Education