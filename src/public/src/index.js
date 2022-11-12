 async function llamadaDeApi () {

   const api = await fetch('https://jsonplaceholder.typicode.com/users/1/todos');

   const apiJson = await api.json();
   const array = apiJson;
  array.forEach(elementos => console.log(elementos););


 }

console.log(llamadaDeApi());
