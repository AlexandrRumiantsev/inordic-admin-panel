import React, {useEffect, useState} from 'react'
//Импортируем в основной шабоон приложения меню
import Menu from '../menu/'
//Импортируем механизмы роутер дома
//Outlet - 
import {Outlet} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { goodsActions } from '../../store/reducers/goods/goods.slice';

function MainLayout(){

        const [menu, setMenu] = useState(
            [
                {
                  text: 'Главная',
                  link: '/'
                }, 
                {
                  text: 'Товары',
                  link: '/goods'
                }
            ]
        )

        const dispatch = useDispatch()

        useEffect(()=> {
            dispatch(goodsActions.getAll())
        }, [])

        const goods = useSelector(x => x);

        console.log('useSelector', goods)

       
        return(
            <div>
                <header>
                    <Menu menu={menu}/>
                </header>
                <main>
                    <Outlet />
                </main>
            </div>
        )
    }

export default MainLayout