import React,{ Component } from "react";
import Slider from "react-slick";

import workReact1 from '../../image/react_work_1.png'
import workReact2 from '../../image/react_work_2.png'
import workReact3 from '../../image/react_work_3.png'
import workReact4 from '../../image/react_work_4.png'
import workLayout1 from '../../image/layout_work_1.png'
import workLayout2 from '../../image/layout_work_2.png'
import workLayout3 from '../../image/layout_work_3.png'

const myWorksReact = [
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
      title: 'Список дел', 
      img: workReact2, 
      href: 'https://di-112.github.io/to-do-list-react',
      GHref: 'https://github.com/di-112/to-do-list-react',
      descr: `Приложение, предназначенное для составления списка дел. Пользователь может дабавлять либо удалять задачи.
      Все задачи сохраняюся в облачной БД.`,
      tech: 'html, css, scss, react, redux, google firebase, git' 
   },
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
      title: 'Сборник кулинарных рецептов',
      img: workReact4, 
      href: 'https://di-112.github.io/eat-recipes',
      GHref: 'https://github.com/di-112/eat-recipes',
      descr: `Приложение, в котором пользователь может сделать запрос по поиску кулинарных рецептов с определеммным ингредиентом и 
      ознакомится с подробной информацией об интересующем блюде.`,
      tech: 'html, css, scss, react, redux, git'
   }
]

const myWorksLayouts = [
   {
      img:workLayout1,
      href: 'https://di-112.github.io/layout-champions-league',
      GHref: 'https://github.com/di-112/layout-champions-league'
   },
   {
      img:workLayout2,
      href: 'https://di-112.github.io/layout-golden-company',
      GHref: 'https://github.com/di-112/layout-golden-company'
   },
   {
      img:workLayout3,
      href: 'https://di-112.github.io/layout-web-development-company',
      GHref: 'https://github.com/di-112/layout-web-development-company'
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
      <section className="myWorks">
         <h2 className='myWorks__title title'>Портфолио</h2>
         <div className="myWorks__react">
            <h3 className='myWorks__subtitle'>React приложения</h3>
            <Slider className='myWorks__slider' {...settingsForSLider}>
               {
                  this.state.myWorksReact&&this.state.myWorksReact.map(work=><div> <Work {...work} /> </div>)
               }
            </Slider>
         </div>
         <div className="myWorks__layouts">
            <h3 className='myWorks__subtitle'>Верстка макетов</h3>
               <div className="myWorks__info">
                  <div className="myWorks__descr">
                     <h3>Описание</h3>
                     <p>Адаптивная верстка макетов. Стили написаны с помощью языка scss. Для сборки проектов
                     использовался Prepros. Чтение макетов осуществлялось с помощью Avacode. 
                     В каждом проекте реализовано меню-бургер при определенном изменении разрешения экрана.</p>   
                  </div>
                  <div className="myWorks__technology">
                     <h3>Стек технологий</h3>
                     <p>html, css, scss, java script, avacode, prepros</p>   
                  </div>
               </div>  
               <Slider className='myWorks__slider layouts' {...settingsForSLider}>
                  {
                     this.state.myWorksLayouts&&this.state.myWorksLayouts.map(work=><div> <Work {...work} /> </div>)
                  }
               </Slider>
         </div>
      </section>
   )
}
}

const img = 'https://avatars.mds.yandex.net/get-pdb/1942669/a3073064-784c-4bbf-92bf-2f742284a07f/s1200?webp=false'

const Work = (props) => {
   if(props.title&&props.descr&&props.tech) return (
      <div className='myWorks__work work'>
         <h2 className='work__title'>{props.title}</h2>
         <div className='work__img'>
            <img src={props.img?props.img:img} alt='no image'/>
            <div className='work__hover'>
               <a href={props.href?props.href:''} target='blank'>Visit</a>
            </div>
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
               <span>Github репозиторий: </span><a target='blank' href={props.GHref}> {props.GHref?props.GHref:''}</a>
            </div>
         </div>  
      </div>
   )
   else return (
      <div className={'myWorks__work work layout'}>
         <div className='work__img'>
            <img src={props.img?props.img:img} alt='no image'/>
            <div className='work__hover'>
               <a href={props.href?props.href:''} target='blank'>Visit</a>
            </div>
         </div> 
         <div className='work__GHref'>
            <span>Github: </span> <a target='blank' href={props.GHref}> {props.GHref?props.GHref:''}</a>
         </div>
      </div>
   )
}
