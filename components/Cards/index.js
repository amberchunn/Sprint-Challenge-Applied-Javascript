// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
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

// Axios Get Request from News Source
axios
	.get('https://lambda-times-backend.herokuapp.com/articles')
	.then((response) => {
		// Retrieve Data From Promise
		const data = response.data.articles;

		// Create a card for each of the articles and add the card to the DOM.

		for (const prop in data) {
			const cardListing = document.querySelector('.cards-container');
			const topic = data[prop];
			topic.forEach((item) => {
				const article = articleCreator(item);
				cardListing.appendChild(article);
			});
		}
	})
	.catch((error) => {
		console.log('Error:', error);
	});

// Function to Create Article Card
function articleCreator(data) {
	const card = document.createElement('div');
	card.classList.add('card');

	const headlineEl = document.createElement('div');
	headlineEl.classList.add('headline');
	headlineEl.textContent = data.headline;

	const author = document.createElement('div');
	author.classList.add('author');

	const imgContainer = document.createElement('div');
	imgContainer.classList.add('img-container');
	const image = document.createElement('img');
	image.setAttribute('src', data.authorPhoto);

	const byline = document.createElement('span');
	byline.textContent = `By ${data.authorName}`;

	card.appendChild(headlineEl);
	card.appendChild(author);
	author.appendChild(imgContainer);
	imgContainer.appendChild(image);
	author.appendChild(byline);

	return card;
}
