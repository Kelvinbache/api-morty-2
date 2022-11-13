'use strict';

 async function llamadaDeApi () {

   const api = await fetch('https://jsonplaceholder.typicode.com/users/1/todos');
   const apiJson = await api.json();

   const array =  apiJson;

    const reformar = array.map((objectos) => {
        const valores =  [];
        valores[objectos.id] = objectos.title;
        return valores.forEach(creadora);
    } );
 }

function creadora (titulos,id){
const cuerpoDeTabla = document.getElementById('cuerpoDeLaTabala');
const tr = document.createElement('tr');

  for (let  i = 0; i < 1 ; i++) {
     const td1 = document.createElement('td');
     const td2 = document.createElement('td');

     td1.textContent = id;
     td2.textContent = titulos;

      tr.appendChild(td1);
      tr.appendChild(td2);
  }
    cuerpoDeTabla.appendChild(tr);
}

llamadaDeApi();
