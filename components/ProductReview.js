var productReciew= {
	template:
	/*html*/ `
		<form class="review-form" @submit.prevent="onSubmit">
			<p>
				<label for="name">Name:</label>
				<input id="name" v-model="name" type="text"/>
			</p>
			<p>
				<label for="review">Review:</label>
				<textarea id="review" name="review" v-model="review" type="text"></textarea>
			</p>
			<p>
				<label for="rating">Rating:</label>
				<select id="rating" v-model.number="review" name="rating">
					<option>5</option>
					<option>4</option>
					<option>3</option>
					<option>2</option>
					<option>1</option>
				</select>		
			</p>
			<p>
				<input type="submit" value="Submit" id="submit" name="submit">
			</p>
		</form>
		
	`,
	data() {
		return {
			name: null,
			review: null,
			rating: null
		}
	},
	methods: {
		onSubmit(){
			let productReview = {
				name: this.name,
				review: this.review,
				rating: this.rating
			};

			this.$emit('review-submitted', productReview)
			this.name= null,
			this.review= null,
			this.rating= null
		}
	}
}

export default {
	components: {
		name: 'ProductReview',
	}
}