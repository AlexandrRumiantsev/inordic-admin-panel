//Импортируем реакт
import React from 'react'

class Menu extends React.Component{
    constructor(){
        super()
    }
    //Метод который есть у любого компонента в реакте для отображжения шаблона
    render(){
        //Декомпозируем поле menu из объекта this.props
        const {menu} = this.props
        //Задача - вывести элементы меню на верстку
        //1) Перебрать массив menu
        //2) выводить тэе <a> с названием и ссылкой
        return (
            <div>
                <h1>Меню</h1>
                {
                    menu.map((menuItem, index) => {
                        return (
                            <a key={index} href={menuItem.link}>
                                {menuItem.text}
                            </a>
                        )
                    })
                }
            </div>
        )
    }
}
//Экспортируем наш компонент
export default Menu