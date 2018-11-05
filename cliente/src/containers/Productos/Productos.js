import React,{Component} from 'react';
import Producto from '../../components/Producto';
import Buscador from '../../components/Buscador/Buscador';
import axios from 'axios';
import LoginRequired from '../../components/LoginRequired';

export default class Productos extends Component {
    state = {
        productos: [],
        terminoBusqueda: ''
    }
    busquedaProducto= (busqueda) => {
        console.log(busqueda);
        
        if ( busqueda.length > 3) {
            //obtener copia del state
            let productos = this.state.productos;
            let resultado;
            //filtrar 
            resultado = productos.filter( producto => {
                console.log(producto);
                
                return producto.nombre.toLowerCase().indexOf(busqueda.toLowerCase()) !== -1
            })
            //enviar al state los productos filtrados y la busqueda
            this.setState({
                terminoBusqueda:busqueda,
                productos: resultado
            })
        } else {
            this.setState({
                terminoBusqueda: ''
            }, () => {

                this.queryAPI()
            }
            )
        }
    }
    componentWillMount() {
        // this.setState({
        //     productos: []
        // })
        this.queryAPI();
    }
    queryAPI = () => {
        //
        const { getAccessToken } = this.props.auth;

        const headers = {'Authorization': `Bearer ${getAccessToken()}`}

        const url = 'http://localhost:8080/productos';
        
        return axios.get(url, {headers})
                .then( resp => this.setState({productos: resp.data}) )
        console.log(headers);
    }
    
    login = () => {

        this.props.auth.login();
    }
    render() {
        const {isAuthenticated}  = this.props.auth;
        console.log(this.props.auth.isAuthenticated());
        
        return (
            <div className="productos">
                {isAuthenticated() && (
                    <React.Fragment>
                        <h2>Nuestros Productos</h2>
                        <Buscador busqueda={this.busquedaProducto}/>
                        <ul className="lista-productos">
                            {
                                this.state.productos.map( (producto, index) => {
                                    return <Producto key={index} info={producto}/>
                                })
                            }
                        </ul>
                    </React.Fragment>
                )
                }
                { !isAuthenticated() && (
                    <LoginRequired login={this.login} />
                )
                }
            </div>
        );
    }
}