import React from 'react'

import './index.css'
import GoodItem from '../good-item'

import goodsJSON from '../../stub/goods.json'
//Создали реф для получения данных введенные в поле поиска
const inputSearchRef = React.createRef();

/**
 * GoodList - компонентсписка карточек товаров
 */
class GoodList extends React.Component{
    constructor(){
        super()
        this.state = {
            goods: goodsJSON,
            filteredGoods: null,
        }
    }
    findGood(event){
        //Так состояния в реакте не обновляются
        //this.state.goods = [] 
        // Реакт использет обертку для обновления состояния
        // C помощью setState, работает с состоянием в реакте

        //Получаем введенное в инпет значение, через реф
        const valueFromSearchInput = inputSearchRef?.current?.value
        console.log(valueFromSearchInput)
        //найдем в стейте, то, что мы ввели в поле поиска
        const searcherElement = this.state.goods.find(good => 
            good.TITLE == valueFromSearchInput || good.DISCR == valueFromSearchInput
        )
        console.log(searcherElement)
        //Обрабатываем условие, когда инпут пустой
        // ДЗ - Починить условие, которое возвращает все товары на верстку, при поиске из пустого инпута
        if(searcherElement == '' || searcherElement == undefined) {
            this.setState({
                goods: goodsJSON
            })
        }else{
            //Обновляем состояние компонента
            this.setState({
                filteredGoods: [searcherElement]
            })
        }
        

        /**
         * ДЗ
         * Получить текст из инпута в этом методе
         * Есть 2 варианта
         * - использовать реф
         * - использовать форму
         * ПОДСКАЗКА - посмотреть, как мы получали данные с формы во VUE
         * https://reactjs.org/docs/refs-and-the-dom.html
         */


    }
    render(){
        //Ищем товары сначало в отфильтрованных, если их там нет, то в обычном блоке
        const goods = this.state.filteredGoods || this.state.goods
        return(
            <React.Fragment>
                <div>
                    ПОИСК
                    <input ref={inputSearchRef} type='text'/> 
                    <input type='submit' onClick={(event) => {this.findGood(event)}} value='Найти'/>
                </div>
                <div className='card-list'>
                {      
                    goods.map(good => 
                        <GoodItem 
                            key={good.ID}
                            data={good}
                        />
                    )
                }
                </div>
            </React.Fragment>
        )
    }
}

export default GoodList