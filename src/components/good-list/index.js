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
        //Получаем введенное в инпет значение, через реф
        const valueFromSearchInput = inputSearchRef?.current?.value
        console.log(valueFromSearchInput)
        //найдем в стейте, то, что мы ввели в поле поиска
        const searcherElement = this.state.goods.find(good => 
            good.TITLE == valueFromSearchInput || good.DISCR == valueFromSearchInput
        )
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

    }
    delGood(id, context){
        console.log(`Удаляем товар ${id}`)
        console.log(`context`, context)
        const goods = context.state.filteredGoods || context.state.goods
        const newFilteredGoods = goods.filter((good) =>
            good.ID !== id
        )

        context.setState({
            goods: newFilteredGoods,
            filteredGoods: newFilteredGoods
        })
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
                            delGood={this.delGood}
                            goodListContext={this}
                        />
                    )
                }
                </div>
            </React.Fragment>
        )
    }
}

export default GoodList