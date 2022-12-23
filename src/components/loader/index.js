import './index.css'

/**
 * Компонент загрузчик, который отображается, во время получения данных
 * @returns Компонент Loader
 * ДЗ доделать компонент
 */
export function Loader(){
    return(
        <div class='overlay'>
            <img src='https://study.inordic.ru/images/icons/logo.svg' />
        </div>
    )
}