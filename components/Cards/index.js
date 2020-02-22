// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

// Axios Get Request from News Source
axios
	.get('https://lambda-times-backend.herokuapp.com/articles')
	.then(response => {
		let data = response.data;
		// console.log('Success. You mission succedded');
		// console.log(data.articles);

		data.articles.forEach(item => {
			console.log(item);
		});

		// Set Up Car Structure
		let card = document.createElement('div').setAttribute('class', 'card');
		let headline = document.createElement('div').setAttribute('class', 'headline');
		let author = document.createElement('div').setAttribute('class', 'author');
		let imgContainer = document
			.createElement('div')
			.setAttribute('class', 'img-container');
		let image = document.createElement('img').setAttribute('src', '#');
		let byline = document.createElement('span');

		// Get Card Data
	})
	.catch(error => {
		console.log('Error:', error);
	});
