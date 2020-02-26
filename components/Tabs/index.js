// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// Axios Get Request from News Source
axios
	.get('https://lambda-times-backend.herokuapp.com/topics')
	.then(response => {
		// Retrieve Data From Promise
		const topicsArr = response.data.topics;

		// Create the Tabs
		const tabCreator = arr => {
			arr.forEach(item => {
				const tabDiv = document.createElement('div');
				tabDiv.classList.add('tab');
				tabDiv.textContent = item;
				let menu = document.querySelector('.topics');
				menu.appendChild(tabDiv);
			});
		};

		// Run the Function
		tabCreator(topicsArr);
	}) // Close of .then
	.catch(error => {
		console.log('Error:', error);
	});
