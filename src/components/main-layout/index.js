import React from 'react'
//Импортируем в основной шабоон приложения меню
import Menu from '../menu/'
//Импортируем механизмы роутер дома
//Outlet - 
import {Outlet} from 'react-router-dom'

class MainLayout extends React.Component{
    constructor(){
        super()

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
        return(
            <div>
                <header>
                    <Menu menu={this.state.menu}/>
                </header>
                <main>
                    <Outlet />
                </main>
            </div>
        )
    }
}

export default MainLayout