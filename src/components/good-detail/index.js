import React from 'react'

import './index.css'

import goodsJSON from '../../stub/goods.json'

/**
 * GoodList - Отдельная стараница с инормацией о товаре и возможностью ее редактировать
 */
class GoodDetailt extends React.Component{
    constructor(){
        super()
    }
    render(){
        //Костыль для полуячения ID из адресной строки, для дальнейшего отображения товара
        const idGood = window.location.pathname.replace( '/goods/', '')
        // найти данные о конкретном товаре по id
        const good = goodsJSON.find( good => good.ID == idGood)
        return(
            <>
                <h1>{good.TITLE}</h1>
                <img className='detail-img' src={good.IMG}/>
                <form>
                    <p>Название товара: <input type='text' name='TITLE' value={good.TITLE}/></p>
                    <p>Описание товара: <input type='text' name='DISCR' value={good.DISCR}/></p>
                    <p>Цена товара: <input type='text' name='PRICE' value={good.PRICE}/></p>
                    <p>Количество товара: <input type='text' value={good.PRICE}/></p>
                    <p>Изображение товара: <input type='file' name="IMG"/></p>
                    <p><input type='submit' value='Сохранить'/></p>
                </form>
            </>
        )
    }
}

export default GoodDetailt