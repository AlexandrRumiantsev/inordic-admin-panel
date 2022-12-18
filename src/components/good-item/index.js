import React from 'react'
import { Link } from "react-router-dom";

import './index.css'
/**
 * GoodItem - компонент карточки товара
 * Пример props: 
 * "ID": "e646b5f2-9c3e-4861-b1ea-eab4c4549b9d",
 * "TITLE": "Куртка",
 * "DISCR": "Куртка из натуральной кожи",
 * "PRICE": "1200000",
 * "IMG": "https://i.ebayimg.com/00/s/ODAwWDgwMA==/z/3~IAAOSwHqxbWwNV/$_57.JPG",
 * "COUNT": "232"
 */
//ДЗ Переделать на функциональный компонент GoodItem
//Приеры для изменения классов в зависимости от состояния
class GoodItem extends React.Component{
    constructor(){
        super()
        this.state = {
            curentForDel: false
        }
    }

    setCurrent(operation){
        //Логика которая происходит на интерфейсе
         //Логика, котрая происходит с данными

        const {currentCount, setCurrentCount, data} = this.props
        console.log('currentCount', currentCount)
        console.log('setCurrentCount', setCurrentCount)
        console.log('setCurrentCount', data)
        
        if(operation == '+'){
            this.setState({
                curentForDel: true
            })
            currentCount.push(data)
            //Копирование объектов на 43 занятии
            setCurrentCount(
                [...currentCount]
            )
            console.log('currentCount обновленный', currentCount)

        }else{
            this.setState({
                curentForDel: false
            })
        }
    }

    render(){
        const {data, delGood} = this.props
        const currentClassName = `good-card ${this.state.curentForDel ? "del" : null}`
        return(
            <div className={currentClassName}> 
                <h2 className='good-card__title'>
                    {data.TITLE}
                </h2>
                <img className='good-card__img' src={data.IMG} />
                <p className='good-card__discr'>
                    {data.DISCR}
                </p>
                <p className='good-card__price'>
                    {data.PRICE}
                </p>
                <div className='good-card__button-block'>
                    <button onClick={ () => {delGood(data.ID)} } className='good-card__del-button link'>
                        Удалить
                    </button>
                    <Link to={`/goods/${data.ID}`} className='link'>
                        Редактировать
                    </Link>
                </div>
                <div className='good-card__del-block'>
                    <button onClick={() => this.setCurrent('+')}>
                        + 
                    </button>
                    <button onClick={() => this.setCurrent('-')}>
                        - 
                    </button>
                </div>
            </div>
        )
    }
}

export default GoodItem