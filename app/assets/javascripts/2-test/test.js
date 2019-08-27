const App = require('./components/app.vue')
const Vue = require ('./vue.js')

new Vue({
  el: '#vuestuff',
  data: {
    message: "hello world"
  }
})

// document.addEventListener('DOMContentLoaded', () => {
//   console.log("here");
//   document.body.appendChild(document.createElement('#vuestuff'))
//   const app = new Vue({
//     el: '#vuestuff',
//     template: '<App/>',
//     components: { App }
//   })
//
//   console.log(app)
// })
