import './App.css';
import React from 'react'

//Импортируем созданный роутер
import Router from './utils/router'
//Импортируем провайдер для роутера
import {RouterProvider} from 'react-router-dom'

/**
 * Основной компонент приложения, в котором мы определяем общее состояние для приложения
 * Наример - меню, логотип, название приложения
 */
class App extends React.Component{
  constructor(){
      super()
  }
  render(){
    return (
      <div className="App">
        <RouterProvider router={Router}/>
      </div>
    );
  }
}

export default App;
