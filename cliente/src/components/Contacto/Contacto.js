import React from 'react';
import cssModule from 'react-css-modules';
import styles from './Contacto.css';
import LoginRequired from '../LoginRequired';

const Contacto = (props) => {
    const {isAuthenticated } = props.auth;


    return (
      <React.Fragment>

          { isAuthenticated() && (
            <form>
                <legend>Formulario de Contacto</legend>
                <div className="input-field">
                  <label>Nombre: </label>
                  <input type="text" placeholder="Tu Nombre"/>
                </div>
                <div className="input-field">
                  <label>Email: </label>
                  <input type="text" placeholder="Tu Email"/>
                </div>
                <div className="input-field">
                  <label>Mensaje: </label>
                  <textarea></textarea>
                </div>
                <div className="input-field enviar">
                  <input type="submit" value="Enviar" />
                </div>
              </form>
            )
          }
          
          {
            !isAuthenticated() && (
                <LoginRequired login={props.auth.login}/>
            )
          }
    
      </React.Fragment>
    )
};

Contacto.propTypes = {

};

export default cssModule(Contacto, styles);
