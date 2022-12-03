//Импортируем реакт
import React from 'react'

class Main extends React.Component{
    constructor(){
        super()
    }
    //Метод который есть у любого компонента в реакте для отображжения шаблона
    render(){
        return (
            <div>Основная страница</div>
        )
    }
}
//Экспортируем наш компонент
export default Main