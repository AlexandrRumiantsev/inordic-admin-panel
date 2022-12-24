import { 
    createBrowserRouter,
} from 'react-router-dom'

//Импортируем страницы приложения для дальнейшего отображения на определенных маршрутах
import Main from '../../pages/main'
import Goods from '../../pages/goods'

//Импортируем созданный нами лайаут
import MainLayout from '../../components/main-layout'

import {GoodList} from '../../components/good-list'
import {GoodDetail} from '../../components/good-detail'


/**
 * Router - утилс который опредяет маршруты приложения
 * Маршруты:
 * Основной - '/': Отображается компонент Main (Основная страница)
 * Товары - '/goods': Отображается компонент Goods (товары)
 */
const Router = createBrowserRouter(
    [
        {
            element: <MainLayout />,
            children: [
                {
                    path: '/',
                    element: <Main />,
                },
                {
                    path: '/goods',
                    element: <Goods />,
                    children: [
                        {
                            index: true,
                            element: <GoodList />
                        },
                        {
                            path: '/goods/:id',
                            element: <GoodDetail />
                        }
                    ]
                }
            ]
        }
    ]
)
//Экспортируем роутер
export default Router 