
const app = Vue.createApp({
  el: '#app',
  data() {
    return {
      premium: true,
      cart: 0
    }
  },
  methods: {
    updateCart(){
      this.cart +=1;
    },
    removeCartUpdate() {
      if(this.cart <= 0) return this.cart = 0;
      return this.cart -= 1;
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

