import React from 'react'

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
        const {data} = this.props
        console.log(data)
        return(
            <div> 
                Карточка товара 
                <h2>
                    {data.TITLE}
                </h2>
                <img />
                <p>
                    {data.TITLE}
                </p>
            </div>
        )
    }
}

export default GoodItem