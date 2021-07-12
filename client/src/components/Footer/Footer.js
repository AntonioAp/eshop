import React, { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../../context/themeContext'
import './Footer.css'

const Footer = () => {
    // creamos un estado dark que almacenará un booleano
    const [dark, setDark] = useState(false);

    // importamos la función toggleTheme de nuestro ThemeContext
    const { toggleTheme } = useContext(ThemeContext)

    // Creamos la función handleClick que invertirá el valor del estado dark (true/false)
    const handleClick = () => {
        setDark(!dark)
    }

    // Creamos un useEffect que se ejecute al cambiar el estado dark y pase por context el valor actual de ese estado a través de la función toggleTheme (que llega por context)
    // ejecutamos toggleTheme para enviar el valor actual del estado "dark" del componente
    useEffect(() => {
        toggleTheme(dark)
    }, [dark]);

    return (
        <footer className='Footer'>
            {/* Añadimos un botón que al hacer click cambie su estado al booleano contrario */}
            <button onClick={handleClick}> Toggle Theme</button>
        </footer>
    )
}

export default Footer
