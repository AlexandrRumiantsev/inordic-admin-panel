import React, {useState, useEffect} from 'react'
import { useLocation } from "react-router-dom";

import './index.css'
import GoodItem from '../good-item'
import {Loader} from '../loader'

import goodsJSON from '../../stub/goods.json'
//Создали реф для получения данных введенные в поле поиска
const inputSearchRef = React.createRef();


/**
 * GoodList - компонентсписка карточек товаров
*/

export function GoodList(){
    // useState - хук для подключения состояний к функциональному компоненту
    // goods - значение в состоянии
    // setGoods - функция, которая позволяет это состояние поменять
    // useState([]) - задействуем хук и устанавливаем по умолчанию состояни пустого массива
    const [goods, setGoods] =  useState([])
    const [filteredGoods, setFilteredGoods] =  useState(null)
    //хук для лоадера загрузки
    const [isLoading, setIsLoading] =  useState(true)
    //Сосстояния выбранных товаров 
    const [currentCount, setCurrentCount] =  useState([])
    //Получаем данные, которые передаются в роут с помощью useLocation
    const location = useLocation();
    
    //Работа с useEffect - хук для работы с состояниями и побочными эффектами 
    // 2 параметра
    // 1 параметр алгоритм, внутри хука
    // 2 список зависимостей, на которые реагирует useEffect
    useEffect(() => {
        console.log('GoodList загрузился')
        setTimeout(() => {
            //Получаем goods, который записали в GoodDetail
            const goodsFromDetail = location.state.goods
            if(goodsFromDetail){
                setGoods(goodsFromDetail)
            }else {
                setGoods(goodsJSON)
            }
           
            setIsLoading(false)
        }, 1000);
    }, [])

    const findGood = (event) => {
        //ДЗ сделать поиск в реальном времени
        //Получаем введенное в инпет значение, через реф
        const valueFromSearchInput = inputSearchRef?.current?.value
        //найдем в стейте, то, что мы ввели в поле поиска
        const searcherElement = goods.find(good => 
            good.TITLE == valueFromSearchInput || good.DISCR == valueFromSearchInput
        )
        if(searcherElement == '' || searcherElement == undefined) {
            setGoods(goodsJSON)
        }else{
            //Обновляем состояние компонент
            setFilteredGoods([searcherElement])
        }

    }

    const delGood = (id) => {
        //ДЗ Рефакторинг метода delGood
        const newGoods = goods.filter((good) =>
            good.ID !== id
        )
        setGoods(newGoods)

        const newFilteredGoods = filteredGoods.filter((good) =>
            good.ID !== id
        )
        setFilteredGoods(newFilteredGoods)
    }

    const delCurrentGood = () => {
        console.log('delCurrentGood')
    }

     //Вывод лоадера, во время загрузки компонента
    if(isLoading){
        return <Loader />
    }

    const currentGoods = filteredGoods || goods

    return(
        <React.Fragment>
            <div className='panel-button'>
                <input ref={inputSearchRef} placeholder='Введите название товара' type='text'/> 
                <input type='submit' onClick={(event) => findGood(event)} value='Поиск'/>
                <button onClick={(event) => delCurrentGood(event)}>
                    Удалить {currentCount.length} товаров
                </button>
            </div>
            <div className='card-list'>
            {      
                currentGoods.map(good => 
                    <GoodItem 
                        key={good.ID}
                        data={good}
                        delGood={delGood}
                        currentCount={currentCount}
                        setCurrentCount={setCurrentCount}
                    />
                )
            }
            </div>
        </React.Fragment>
    )
}