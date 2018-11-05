import React from 'react'

const LoginRequired = (props) => (
    <div className="contenedor-boton">
        <p>Para ver el contenido debes estar logueado</p>
        <a className="boton" onClick={props.login}>Iniciar Sesion</a>
    </div>
)

export default LoginRequired;