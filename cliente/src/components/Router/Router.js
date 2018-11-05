import React, {Component} from 'react';
import {Router as BrowserRouter, Route, Switch} from 'react-router-dom'
//Aut0
import Callback from '../Callback/Callback';
import Auth from '../../Auth/Auth';
import history from '../../history';

//Componentes propios
import Header from '../Header';
import Nosotros from '../Nosotros';
import Error404 from '../Error404';
// import infoProductos from '../../datos/datos.json';
import Productos from '../../containers/Productos';
import SingleProducto from '../SingleProducto';
import style from '../Error404/style.css'
import Navegacion from '../Navegacion';
import Contacto from '../Contacto/Contacto';

const auth = new Auth();

const handleAuthentication = ({location}) => {
    if (/access_token|id_token|error/.test(location.hash)) {
      auth.handleAuthentication();
    }
  }
export default class Router extends Component {


    componentWillMount() {
       
    }

    render(){
        
        return (
            <BrowserRouter history={history}>
                <div className="contenedor">
                    <Header />
                    <Navegacion auth= {auth}/>
                    <Switch>
                        <Route  exact path="/" render={ (props) => (
                                <Productos 
                                auth={auth} {...props} />
                        )} />
                        <Route  exact path="/producto/:productoId" render={(props)=> {
                            const {productoId} = props.match.params;
                            console.log(productoId);
                            return <SingleProducto 
                                        producto={this.state.productos[productoId]} 
                                        auth={auth} {...props}
                                        />
                        }}/>
                        <Route  exact path="/productos" render={ (props) => (
                            <Productos 
                                auth={auth} {...props} />
                        )} />
                        <Route  exact path="/nosotros" component={Nosotros}/>
                        <Route  exact path="/contacto"   render={ (props) => (
                            <Contacto auth={auth} />
                        )}/>
                        <Route  exact path="/callback" render={(props) => {
                            handleAuthentication(props);
                            return <Callback {...props} />
                        }}/>
                        <Route  activeStyle={style} component={Error404} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

// export const makeMainRoutes = () => {
//     return (
//         <Router history={history}>
//           <div>
//             <Route path="/" render={(props) => <App auth={auth} {...props} />} />
//             <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
//             <Route path="/callback" render={(props) => {
//               handleAuthentication(props);
//               return <Callback {...props} /> 
//             }}/>
//           </div>
//         </Router>
//     );
//   }