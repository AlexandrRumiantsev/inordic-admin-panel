import './App.css';
import React from 'react'

//Импортируем созданный роутер
import Router from './utils/router'
//Импортируем провайдер для роутера
import {RouterProvider} from 'react-router-dom'
//Импортируем меню 
import Menu from './components/menu'

/**
 * Основной компонент приложения, в котором мы определяем общее состояние для приложения
 * Наример - меню, логотип, название приложения
 */
class App extends React.Component{
  constructor(){
      super()
      //добавим состояния для компонента
      //this.state атрибут из React.Component, доступен для инициализации в конструкторе класса
      this.state = {
        menu: [
          {
            text: 'Главная',
            link: '/'
          }, 
          {
            text: 'Товары',
            link: '/goods'
          }
        ]
      } 
  }
  render(){
    return (
      <div className="App">
        <Menu menu={this.state.menu}/>
        <RouterProvider router={Router}/>
      </div>
    );
  }
}

export default App;
