import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

const Button = ({ onClick, text, route }) => {
    const buttonStyles = 'bg-[#EA7637] text-white font-bold py-2 w-max px-4 cursor-pointer rounded';
   

    return (
        <div>
            <button className={buttonStyles} onClick={onClick}>
               <Link to={route}>
               {text}
               </Link>
            </button>
        </div>
    )
}

export default Button