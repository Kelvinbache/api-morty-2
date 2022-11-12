import express from 'express'
import  router  from './router/inicio.js'

/*forma de localizar una ruta*/
import {dirname,join} from 'path'
import {fileURLToPath} from 'url'

const app = express ();

const  __dirname = dirname(fileURLToPath(import.meta.url))

/*conectando los archivos de vista*/
app.set( 'views', join(__dirname,'views'))
app.set( ' view engine','ejs')


app.use(router);
app.use(express.static(join(__dirname,'public')))

app.listen(3000,() =>{
  console.log("servidor activado");
})
