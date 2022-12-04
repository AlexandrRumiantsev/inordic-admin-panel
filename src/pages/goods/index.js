//Импортируем реакт
import React from 'react'

import GoodItem from '../../components/good-item'
import goodsJSON from '../../stub/goods.json'

import './index.css'

class Goods extends React.Component{
    constructor(){
        super()

        this.state = {
            goods: goodsJSON
        }
    }
    findGood(event){
        //Так состояния в реакте не обновляются
        //this.state.goods = [] 
        // Реакт использет обертку для обновления состояния
        // C помощью setState, работает с состоянием в реакте

        //Нужно получить текст из инпута
        console.log('event', event.currentTarget)
        this.setState({
            goods: []
        })

        /**
         * ДЗ
         * Получить текст из инпута в этом методе
         * Есть 2 варианта
         * - использовать реф
         * - использовать форму
         * ПОДСКАЗКА - посмотреть, как мы получали данные с формы во VUE
         */


    }
    //Метод который есть у любого компонента в реакте для отображжения шаблона
    render(){
        return (
            <div>
                <h1>Ассортимент</h1>
                    <div>
                        ПОИСК
                        <input type='text'/> 
                        <input type='submit' onClick={(event) => {this.findGood(event)}}/>
                    </div>
                    <div className='card-list'>
                    {
                        this.state.goods.map(good => {
                            return <GoodItem 
                                key={good.ID}
                                data={good}
                            />
                        })
                    }
                    </div>
            </div>
        )
    }
}
//Экспортируем наш компонент
export default Goods