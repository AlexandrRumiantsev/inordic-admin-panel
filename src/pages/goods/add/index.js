import goodsJSON from '../../../stub/goods.json'
import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { imageToBS64 } from '../../../utils/image-to-bs-64'

const formAddRef = React.createRef();

export function Add(){

    //Задействуем useNavigate
    const navigate = useNavigate()

    const addGood = (event) => {
        event.preventDefault()
        const formData = new FormData(formAddRef.current)
        //Получаем введенные в инпуты значения
        const title = formData.get('title')
        const discr = formData.get('discr')
        const price = formData.get('price')
        const count = formData.get('count')
        const img = formData.get('img')
        //Формируем объект для отображения на странице товаров
        const goodObject = {
            "ID": Math.random(),
            "TITLE": title,
            "DISCR": discr,
            "PRICE": price,
            "IMG": '',
            "COUNT": count
        }
        imageToBS64(img, (bsImg) => {
            goodObject.IMG = bsImg
            //TODO Тут будем отпралять данные на сервре 
            //Обновляем интерфейс
            // Шаг 1 - нужно добавить в массив с товарами, новый объект
            goodsJSON.push(goodObject);
            //Шаг 2 - отправить обновленный масссив с товарами на страницу списка товаров
            navigate("/goods", {
                state: {
                    goods: goodsJSON,
                }
            });
        })
    }

    return(
        <form ref={formAddRef} encType="multipart/form-data">
            <input type='text' name='title' placeholder="Заголовок" />
            <input type='text' name='discr' placeholder="Описание" />
            <input type='text' name='price' placeholder="Цена" />
            <input type='text' name='count' placeholder="Количество" />
            <p>Изображение товара: <input type='file' name="img"/></p>
            <input type='submit' onClick={(e)=> addGood(e)} value='Добавить' />
        </form>
    )
} 