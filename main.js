const app = Vue.createApp({
	data() {
		return {
			product: 'Socks',
			image: './assets/images/socks_green.jpg',
			inStock: true,
			details: ["80% cotton", "20% polyester", "Gender-neutral"],
			variants: [
				{ id: 2234, color: "green", variantImage: "./assets/images/socks_green.jpg" },
				{ id: 2235, color: "blue", variantImage: "./assets/images/socks_blue.jpg" }
			],
			cart: 0
		}
	
	},
	methods: {
		addToCart() {
			this.cart +=1
		},
    updateImage(variantImage) {
      this.image= variantImage
    },
    removeCart() {
      if (this.cart <= 0) {
        return cart
      }else {
      this.cart -=1
    }
    }
	}
});