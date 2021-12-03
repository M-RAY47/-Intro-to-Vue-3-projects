app.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: false,
    }
  },
	template:  /*html*/ 
  `

	<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img :src="image">
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>
        <p v-if="onSale">On Sale</p>
        <p v-else :style="{ 'text-decoration' : line-through }">Out of Stock</p>
        <p>Shipping: {{ shipping }}</p>
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>
            
        <div v-for="(variant, index) in variants" 
        :key="variant.id"
        class="color-circle"
        :style="{ backgroundColor: variant.color}"
        @mouseover="updateVariant(index)">
        </div>
        <div class="btn-group">
          <button class="button" 
          v-on:click="addToCart"
          :class="{ disabledButton: !onSale }"
          :disabled="!onSale">Add to Cart</button>
          <button class="button" v-on:click="removeCart"
          :class="{ disabledButton: cart==0 }"
          :disabled="cart == 0">Remove from Cart</button>
        </div>
      </div>
    </div>
  </div>
	`,
	data() {
		return {
			brand: 'Vue Mastery',
			product: 'Socks',
			selectedVariant: 0,
			details: ["80% cotton", "20% polyester", "Gender-neutral"],
			variants: [
				{ id: 2234, color: "green", image: "./assets/images/socks_green.jpg", quantity: 20},
				{ id: 2235, color: "blue", image: "./assets/images/socks_blue.jpg", quantity: 0}
			]
		}
	},
	methods: {
		addToCart() {
			this.$emit('add-to-cart', this.variants[this.selectedVariant].id);
		},
    updateVariant(index) {
      this.selectedVariant = index;
	  console.log(index)
    },
    removeCart() {
      this.$emit('remove-from-cart', this.variants[this.selectedVariant].id);
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
  	},
    shipping() {
      if (this.premium){
        return "Free"
      }
      return 2.99
    }
	}
})