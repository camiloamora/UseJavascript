console.log('hola mundo!');
const noCambia = "Leonidas";

let cambia = "@LeonidasEsteban"

function cambiarNombre(nuevoNombre) {
  cambia = nuevoNombre
}

const getUserAll = new Promise(function(todoBien , todoMal){
  //Llamar a un api
  setTimeout(function (){
    //luego de 3 segundos
    todoMal('se acabo el tiempo');
  }, 5000)
})

const getUser = new Promise(function(todoBien , todoMal){
  //Llamar a un api
  setTimeout(function (){
    //luego de 3 segundos
    todoBien('se acabo el tiempo 3');
  }, 3000)
})

// getUser
//   .then(function(){
//     console.log('Todo esta bien')
//   })
//   .catch(function(er){
//     console.log('Todo mal ${er}' );
//   })

// Promise.all([
//   getUserAll,
//   getUser
// ])
// .then(function(msg){
//   console.log(msg)
// })
// .catch(function(er){
//   console.log(er);
// })

Promise.race([
  getUserAll,
  getUser
])
.then(function(msg){
  console.log(msg)
})
.catch(function(er){
  console.log(er);
})