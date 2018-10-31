import  express from 'express';
const jwt = require('express-jwt');
const cors = require('cors');
const jwks = require('jwks-rsa');
const jwtAuthz = require('express-jwt-authz');
const bodyParser = require('body-parser');
import productos from './productos.json';

//crear servidor
const app = express();

//Configurar el servidor para json
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );

app.use( cors() )
const port = process.env.PORT || 8080;

//Valida web token valido
const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: "https://genarotp.auth0.com/.well-known/jwks.json"
    }),
    audience: 'http://productos',
    issuer: "https://genarotp.auth0.com/",
    algorithms: ['RS256']
});

//revisamos y validamos los scopes
const checkScopes = jwtAuthz(['read:productos']);

app.get('/productos', jwtCheck,checkScopes, (req, res) => {
    res.status(200)
            .json(productos)
})

app.listen(port, () => {
    console.log('Servidor Inicia');
    
});