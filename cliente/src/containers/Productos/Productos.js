import React,{Component} from 'react';
import Producto from '../../components/Producto';
import Buscador from '../../components/Buscador/Buscador';
import { log } from 'util';

export default class Productos extends Component {
    state = {
        productos: [],
        terminoBusqueda: ''
    }
    busquedaProducto= (busqueda) => {
        console.log(busqueda);
        
        if ( busqueda.length > 3) {
            this.setState({
                terminoBusqueda:busqueda
            })
        } else {
            this.setState({
                terminoBusqueda: ''
            })
        }
    }
    componentDidMount() {
        // this.setState({
        //     productos: []
        // })
        this.queryAPI();
    }
    queryAPI = () => {
        
        console.log(this.props.auth);
        
    }
    
    login = () => {

        this.props.auth.login();
    }
    render() {
        const {isAuthenticated}  = this.props.auth;
        console.log(this.props.auth.isAuthenticated());
        let resultado= this.state.productos;
        let busqueda = this.state.terminoBusqueda;
        resultado = resultado.filter( producto => (
            producto.nombre.toLowerCase().indexOf(busqueda.toLowerCase()) !== -1
        ))
        return (
            <div className="productos">
                <h2>Nuestros Productos</h2>
                <Buscador busqueda={this.busquedaProducto}/>
                {isAuthenticated() && (
                    <ul className="lista-productos">
                        {
                            resultado.map( (producto, index) => {
                                return <Producto key={index} info={producto}/>
                            })
                        }
                    </ul>
                )
                }
                { !isAuthenticated() && (
                    <div className="contenedor-boton">
                        <p>Para ver el contenido debes estar logueado</p>
                        <a className="boton" onClick={this.login}>Iniciar Sesion</a>
                    </div>
                )
                }
            </div>
        );
    }
}