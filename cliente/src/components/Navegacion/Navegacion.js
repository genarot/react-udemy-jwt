import React from 'react';
import './Navegacion.css';
import {NavLink} from 'react-router-dom';

const Navegacion = (props) => {
  console.log('navigation', props)
  const {isAuthenticated} = props.auth;

  return (<nav className="navegacion">
              <NavLink to="/nosotros" activeClassName="activo">Nosotros</NavLink>
              <NavLink to="/productos" activeClassName="activo">Productos</NavLink>
              <NavLink to="/contacto" activeClassName="activo">Contacto</NavLink>
              {
                isAuthenticated() && (
                    <a onClick={() => { props.auth.logout() }} >LogOut</a>
                  )
              }
          </nav>
          )
};

Navegacion.propTypes = {

};

export default Navegacion;