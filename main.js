
const app = Vue.createApp({
  el: '#app',
  data() {
    return {
      premium: true,
      cart: []
    }
  },
  methods: {
    updateCart(id){
      this.cart.push(id);
    },
    removeCartUpdate() {
      if(this.cart.length != 0){
        this.cart.pop();
      }
    }
  }
});

app.component('sock', {
  template: `<h1>Hello from sock component!!!</h1>`,
  data(){
    return {
      hello:"Hello Component"
    }
  }
})
