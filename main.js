const app = Vue.createApp({
	data() {
		return {
			brand: 'Vue Mastery',
			product: 'Socks',
			selectedVariant: 0,
			details: ["80% cotton", "20% polyester", "Gender-neutral"],
			sizes: ['S', 'M', 'L', 'XL', 'XXL'],
			variants: [
				{ id: 2234, color: "green", image: "./assets/images/socks_green.jpg", quantity: 20},
				{ id: 2235, color: "blue", image: "./assets/images/socks_blue.jpg", quantity: 0}
			],
			cart: 0
		}
	
	},
	methods: {
		addToCart() {
			this.cart +=1;
		},
    updateVariant(index) {
      this.selectedVariant = index;
	  console.log(index)
    },
    removeCart() {
      if (this.cart <= 0) {
        return cart;
      }else {
        this.cart -=1;
      }
    }
	},
  computed: {
    title(){
      return this.brand + " " + this.product
    },
	image() {
		return this.variants[this.selectedVariant].image
	},
	onSale() {
		return this.variants[this.selectedVariant].quantity
	}
  }
});