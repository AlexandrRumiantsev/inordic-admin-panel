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
class GoodItem extends React.Component{
    constructor(){
        super()
    }
    render(){
        const {data, delGood, goodListContext} = this.props
        return(
            <div className='good-card'> 
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
                    <button onClick={ () => {delGood(data.ID, goodListContext)} } className='good-card__del-button link'>
                        Удалить
                    </button>
                    <Link to={`/goods/${data.ID}`} className='link'>
                        Редактировать
                    </Link>
                </div>
            </div>
        )
    }
}

export default GoodItem