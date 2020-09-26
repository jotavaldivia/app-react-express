import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';


const app = express();


const comunas = 
    [
         {
       "_id": 1,
        "name": "Cerrillos",
        "coords": [-33.4233405, -70.6], // esto es latitud y longitude
   },
   {
    "_id": 2,
    "name": "La Reina",
    "coords": [-33.4233405, -70.7], // esto es latitud y longitude
},  
 {
    "_id": 3,
    "name": "Las Condes",
    "coords": [-33.4233405, -70.8], // esto es latitud y longitude
},

{
    "_id": 4,
    "name": "Quilicura",
    "coords": [-33.4233405, -70.9], // esto es latitud y longitude
},
{
    "_id": 5,
    "name": "Huechuraba",
    "coords": [-33.4233405, -70.4], // esto es latitud y longitude
},
];


app.get('/api/comunas', (req, res)=>{
res.json({
 comunas: comunas

})
});




app.set('port', process.env.PORT || 3000);


app.use(webpackDevMiddleware(webpack(webpackConfig)));


app.get('/', (req, res) => {
  res.send('Hola');
});


app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
