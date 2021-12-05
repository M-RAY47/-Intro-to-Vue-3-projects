app.component('product-review', {
	template:
	/*html*/ `
		<form class="review-form">
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
				<select id="rating" name="rating">
					<option>5</option>
					<option>4</option>
					<option>3</option>
					<option>2</option>
					<option>1</option>
				</select>		
			</p>
			<p>
				<input type="submit" value="submit" id="submit" name="submit">
			</p>
		</form>
		
	`,
	data() {
		return {
			name: null,
			review: null
		}
	}
})