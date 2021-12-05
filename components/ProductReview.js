app.component('productReview', {
	templete:
	/*html*/ `
	<form class="product-review">
	<p>
		<label for=""name">Name:</label>
		<input id="name" v-model="name" type="text"/>
	</p>
	<p>
		<label for="review">Review:</label>
		<textarea id="review" name="review" v-model="review" type="text"></textarea>
	</p>

	</form>
	
	`,
	data() {
		return {
			"name": "",
			review: null
		}
	}
})