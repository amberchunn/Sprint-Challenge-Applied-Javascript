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
	.then((response) => {
		// Retrieve Data From Promise
		const topicsArr = response.data.topics;

		// Create the Tabs
		function tabCreator(arr) {
			const menu = document.querySelector('.topics');
			const tabs = arr.forEach((item) => {
				const tab = document.createElement('div');
				tab.classList.add('tab');
				tab.textContent = item;
				menu.appendChild(tab);
			});
			return menu;
		}

		// Run the Function
		tabCreator(topicsArr);
	})
	.catch((error) => {
		console.log('Error:', error);
	});
