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
		// Retrieve Data From Promise
		const articleArr = response.data.articles;
		// Run the Function
		articleCreator(articleArr);
	})
	.catch(error => {
		console.log('Error:', error);
	});

// Function to Create Article Data
const articleCreator = arr => {
	arr.forEach(item => {
		const card = document.createElement('div');
		card.setAttribute('class', 'card');

		let headline = document.createElement('div');
		headline.setAttribute('class', 'headline');
		headline.textContent = item.headline;
		let author = document.createElement('div');
		author.setAttribute('class', 'author');

		let imgContainer = document.createElement('div');
		imgContainer.setAttribute('class', 'img-container');

		let image = document.createElement('img');
		image.setAttribute('src', '#');

		let byline = document.createElement('span');
		byline.textContent = `By ${item.byline}`;
		let cardListing = document.querySelector('.cards-container');
		cardListing.appendChild(artDiv);
	});
};
