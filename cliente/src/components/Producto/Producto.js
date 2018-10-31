import React from 'react'
import {Link} from 'react-router-dom';
import './Producto.css'

const Producto = function(props) {
    const {imagen, nombre, precio, id} = props.info;
    return (
        <li>
            <img src={`img/${imagen}.png`} alt={nombre}/>
            <p> 
                {nombre}<span> $ {precio}</span>
            </p>
            <Link to={`/producto/${id}`}>
                Más Informacion
            </Link>
        </li>
    )
}

export default Producto;