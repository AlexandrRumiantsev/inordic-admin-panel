//Импортируем реакт
import React from 'react'

import GoodItem from '../../components/good-item'
import goodsJSON from '../../stub/goods.json'

class Goods extends React.Component{
    constructor(){
        super()
    }
    //Метод который есть у любого компонента в реакте для отображжения шаблона
    render(){
        return (
            <div>
                <h1>Ассортимент</h1>
                {
                    goodsJSON.map(good => {
                        return <GoodItem 
                            key={good.ID}
                            data={good}
                        />
                     })
                }
            </div>
        )
    }
}
//Экспортируем наш компонент
export default Goods