import React,{ Component } from "react";
import Slider from "react-slick";

import workReact1 from '../../image/react_work_1.png'
import workReact2 from '../../image/react_work_2.png'
import workReact3 from '../../image/react_work_3.png'
import workReact4 from '../../image/react_work_4.png'
import workReact5 from '../../image/react_work_5.png'
import workLayout1 from '../../image/layout_work_1.png'
import workLayout2 from '../../image/layout_work_2.png'
import workLayout3 from '../../image/layout_work_3.png'

const myWorksReact = [
   {
      title: 'Магазин книг',
      img: workReact3, 
      href: 'https://di-112.github.io/books-shop',
      GHref: 'https://github.com/di-112/books-shop',
      descr: `Магазин книг, в котором пользователь может производить поиск по товару, 
      добавлять/удалять нужную книгу в корзину и наблюдать за изменениями в общей стоимости, определять количество покупаемых экземпляров.`,
      tech: 'html, css, scss, react, redux, google firebase, git'
   },
   {
      title: 'Игра для развития памяти', 
      img: workReact1, 
      href: 'https://di-112.github.io/game-for-memory-react',
      GHref: 'https://github.com/di-112/game-for-memory-react',
      descr: `Игра, в которой пользователь за определленное время должен найти все пары цветных квадратов на игровом поле. Размер поля и 
      установленное время зависят от выбранного уровня сложности.`,
      tech: 'html, css, scss, react js, redux, git'
   },
   {
      title: 'Ежедневник', 
      img: workReact2, 
      href: 'https://di-112.github.io/to-do-list-react',
      GHref: 'https://github.com/di-112/to-do-list-react',
      descr: `Приложение, предназначенное для составления списка дел. Пользователь может дабавлять либо удалять задачи.
      Все задачи сохраняюся в облачной БД, созданной посредством google firebase.`,
      tech: 'html, css, scss, react, redux, google firebase, git, bootstrap 5' 
   },
   {
      title: 'Сборник кулинарных рецептов',
      img: workReact4, 
      href: 'https://di-112.github.io/eat-recipes',
      GHref: 'https://github.com/di-112/eat-recipes',
      descr: `Приложение, в котором пользователь может сделать запрос по поиску кулинарных рецептов с определеммным ингредиентом и 
      ознакомится с подробной информацией об интересующем блюде.`,
      tech: 'html, css, scss, react, redux, git'
   },
   {
      title: 'Резюме-портфолио',
      img: workReact5, 
      href: 'https://di-112.github.io/my-resume-portfolio/',
      GHref: 'https://github.com/di-112/my-resume-portfolio',
      descr: `Данное резюме разработано с помощью react, а позже переведено в формат PDF. Изначально список работ был выполнен с помощью слайдера, что и показано 
      в версии по ссылке. Для дальнейшего конвертирования в PDF формат список работ был представлен с использованием grid layout.`,
      tech: 'html, css, scss, react, git'
   }
]

const myWorksLayouts = [
   {
      img:workLayout3,
      href: 'https://di-112.github.io/layout-web-development-company',
      GHref: 'https://github.com/di-112/layout-web-development-company'
   },
   {
      img:workLayout1,
      href: 'https://di-112.github.io/layout-champions-league',
      GHref: 'https://github.com/di-112/layout-champions-league'
   },
   {
      img:workLayout2,
      href: 'https://di-112.github.io/layout-golden-company',
      GHref: 'https://github.com/di-112/layout-golden-company'
   }
]

export default class MyWorks extends Component {
   constructor(props) {
      super(props);
      this.state = {
         myWorksReact: [...myWorksReact],
         myWorksLayouts: [...myWorksLayouts]
      };
   }
   render() {
      const settingsForSLider = {
         slidesToShow: 1,
         dots: true,
         arrow: true,
         slidesToScroll: 1,
         centerMode: true,
         centerMode: true,
         autoplay: true,
         autoplaySpeed: 3000,
         pauseOnHover: true,
         pauseOnFocus: true,
         pauseOnDotsHover: true,
         touchMove: true,
         draggable: false,
         swipe: false,
      };
   return (
      <section className='myWorks'>
         <h2 className='myWorks__title title'>Портфолио</h2>
         <MyWorksSection 
            className='myWorks__react' subtitle='React приложения' 
            descr={`Приложения выполнены с помощью библиотеки redux. Задействованы react hooks. 
            Для написания стилей использовался scss. Запросы на сервер выполняются с помощью библиотеки axios. Дизайн каждого приложения выполнен адаптивно.`}
            myWorks={this.state.myWorksReact}
            settingsForSLider={settingsForSLider}
         />
          <MyWorksSection 
            className='myWorks__layouts' subtitle='Верстка макетов' 
            descr={`Адаптивная верстка макетов. Стили написаны с помощью языка scss. Для сборки проектов
            использовался Prepros. Чтение макетов осуществлялось с помощью Avacode. 
            В каждом проекте реализовано меню-бургер при определенном изменении разрешения экрана.`}
            myWorks={this.state.myWorksLayouts}
            settingsForSLider={settingsForSLider}
            layouts={true}
         />
      </section>
   )
}
}

const img = 'https://avatars.mds.yandex.net/get-pdb/1942669/a3073064-784c-4bbf-92bf-2f742284a07f/s1200?webp=false'


const MyWorksSection = (props) => {
   return (
      <div className={props.className}>
            <h3 className='myWorks__subtitle'>{props.subtitle}</h3>
            <div className="myWorks__info">
               <div className="myWorks__descr">
                  <h3>Описание</h3>
                  <p>{props.descr}</p>   
               </div>
               {props.layouts && 
                  <div className="myWorks__technology">
                     <h3>Стек технологий</h3>
                     <p>html, css, scss, java script, avacode, prepros</p>   
                  </div>}
            </div>
            <WorksSLider myWorks={ props.myWorks} settings={props.settingsForSLider} layouts={props.layouts}/>
      </div>
   )
}

const WorksGrid = (props) => {
   return ( 
      <div className={`myWorks__grid ${props.layouts&&'layouts'}`}>
      {
         props.myWorks&&props.myWorks.map(work=><div> <Work {...work} /> </div>)
      }
      </div>
   )
}

const WorksSLider = (props) => {
   return (
      <Slider className={`myWorks__slider ${props.layouts&&'layouts'}`} {...props.settings}>
      {
          props.myWorks&&props.myWorks.map(work=><div> <Work {...work} /> </div>)
      }
      </Slider>
   )
}

const Work = (props) => {
   if(props.title&&props.descr&&props.tech) return (
      <div className='myWorks__work work'>
         <h2 className='work__title'>{props.title}</h2>
         <div className='work__visit'>
            <div className='work__img'>
               <img src={props.img?props.img:img} alt='no image'/>
               <div className='work__hover'>
                  <a className='work__ref' href={props.href?props.href:''} target='_blank'>Visit</a>
               </div>
            </div> 
            <a  className='work__ref' href={props.href?props.href:''} target='_blank'>Visit</a>
         </div>
         <div className="work__info">
            <div className="work__descr">
               <h3>Описание</h3>
               <p>{props.descr}</p>   
            </div>
            <div className="work__technology">
               <h3>Стек технологий</h3>
               <p>{props.tech}</p>   
            </div>
            <div className='work__GHref'>
               <h3>Github репозиторий: </h3><a target='_blank' href={props.GHref}> {props.GHref?props.GHref:''}</a>
            </div>
         </div>  
      </div>
   )
   else return (
      <div className={'myWorks__work work layout'}>
         <div className='work__visit'>
            <div className='work__img'>
               <img src={props.img?props.img:img} alt='no image'/>
               <div className='work__hover'>
                  <a className='work__ref' href={props.href?props.href:''} target='_blank'>Visit</a>
               </div>
            </div> 
         </div>
         <div className="work__info">
            <a className='work__ref' href={props.href?props.href:''} target='_blank'>Visit</a>
            <div className='work__GHref'>
               <h3>Github репозиторий: </h3> <a target='_blank' href={props.GHref}> {props.GHref?props.GHref:''}</a>
            </div>
         </div>
      </div>
   )
}
