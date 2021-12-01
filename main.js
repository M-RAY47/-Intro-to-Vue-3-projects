
const app = Vue.createApp({
  el: '#app',
  data() {
    return {
      premium: true,
      cart: 0
    }
  }
});

app.component('sock', {
  template: `<h1>Hello from sock component!!!</h1>`,
  data(){
    return "Hello Component"
  }
})



// Creating details component
app.component('details', {
  template:`
  /*html*/

  `
})

