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

$.ajax('https://randomuser.me/api/',{
  method: 'GET',
  success: function(data){
    console.log(data)
  },
  error: function(error){
    console.log(error)
  }
})

fetch('https://randomuser.me/api/')
  .then(function (response){
    // console.log(response)
    return response.json()
  })
  .then(function (user){
    console.log('user',user.results[0].name.first)
  })
  .catch(function (err){
    console.log('algo fallo')
  });

//los parentesis anter del async hace que se autoejecute la funcion
  (async function load() {
    // await 
    // action
    // terror
    // animation
    async function getData(url){
      const response = await fetch(url)
      const data = await response.json()
      return data;
    }

    const  actionList = await getData('https://yts.am/api/v2/list_movies.json?genre=action')
    const  dramaList = await getData('https://yts.am/api/v2/list_movies.json?genre=drama')
    const  animationList = await getData('https://yts.am/api/v2/list_movies.json?genre=animation')
    // let  terrorList;
    // getData('https://yts.am/api/v2/list_movies.json?gnre=terror')
    // .then(function(data){
    //   console.log('terrorList',data)
    //   terrorList = data;
    // })
    console.log(actionList);
    console.log(dramaList);
    console.log(animationList);
    // console.log(data);
    // selectores jquery
    // const $home = $('.home')
    // selectores en javascript
    // const $home = document.getElementById('modal');

    const $actionContainer = document.querySelector('#action')
    const $dramaContainer = document.querySelector('#drama')
    const $animationContainer = document.querySelector('#animation')

    const $featuringContainer = document.querySelector('#featuring')
    const $form = document.querySelector('#form')
    const $home = document.querySelector('#home')

    const $modal = document.getElementById('modal')
    const $overlay = document.getElementById('overlay')
    const $hideModal = document.getElementById('hide-modal')

    // Busca el primer elemento img del modal
    const $modalImage = $modal.querySelector('img')
    const $modalTitle = $modal.querySelector('h1')
    const $modalDescription = $modal.querySelector('p')

    const 
  })()