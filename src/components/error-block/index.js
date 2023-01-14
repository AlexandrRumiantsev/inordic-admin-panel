import React from "react";
import './index.css'

/**
 * Компонент для выводад блока с ошибкой
 * @returns Компонент ErrorBlock
 */
export function ErrorBlock({errorText}){
    return(
        <div className="error-block">
            {errorText}
        </div>
    )
}