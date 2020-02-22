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
		let data = response.data;

		// console.log('Success. You mission succedded');
		// console.log(data);

		let topicMenu = document.querySelector('.topics');

		function tabNav(data) {
			data.forEach(item => {
				let tab = document.createElement('div').setAttribute('class', 'tab');
				tab.document.creatTextNode(item);
				topicMenu.appendChild(tab);
			});
			// console.log(topicMenu);
		}
		return tabNav;
	})
	.catch(error => {
		console.log('Error:', error);
	});
