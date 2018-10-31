import React from 'react';
import cssModule from 'react-css-modules';
import styles   from './Buscador.css';

class Buscador extends React.Component {

  leerDatos = (e)=> {
    const termino = e.target.value;

    this.props.busqueda(termino);
  }

  render () {
    return   ( 
              <form className="buscador">
                <input type="text" placeholder="Busqueda" onChange={this.leerDatos}/>
              </form>
              )
  } 
}

Buscador.propTypes = {

};

export default cssModule(Buscador, styles);
