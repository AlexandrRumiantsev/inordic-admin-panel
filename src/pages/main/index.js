//Импортируем реакт
import React from 'react'
import './index.css'

class Main extends React.Component{
    constructor(){
        super()
    }
    //Метод который есть у любого компонента в реакте для отображжения шаблона
    render(){
        return (
            <div className='main-page'>
                <h1>
                    Административная панель учебного интернет-магазина
                    <br/>
                    <span>
                        INordicShop
                    </span>
                </h1>
            </div>
        )
    }
}
//Экспортируем наш компонент
export default Main