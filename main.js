const app = Vue.createApp({
	data() {
		return {
			product: 'Socks',
			description: "At end of every month, we have some dicount about our socks, Buy one get 30% discount, buy two get 35% discount and buy three above get 40% discount!!!",
			image: './assets/images/socks_green.jpg',
			url: 'https://www.vuemastery.com/courses/intro-to-vue-3/attribute-binding-vue3/',
			lesson: "lesson 3",
			link: "Here is the link to ",
			onSale: true,
			details: ["80% cotton", "20% polyester", "Gender-neutral"],
			variants: [
				{
					variantsId: 2233,
					variantSize: "Small"
				},
				{
					variantsId: 2234,
					variantSize: "Medium"
				},
				{
					variantsId: 2235,
					variantSize: "Large"
				}
			]
		}
	}
});