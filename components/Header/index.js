// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

// let curDate = ();
// const date = {
// 	month: curDate.getMonth() + 1,
// 	day: curDate.getDate(),
// 	year: curDate.getFullYear()
// };

const data = {
	date: 'February 24, 2020',
	heading: 'Lambda Times',
	temp: '70º'
};

let headerContainer = document.querySelector('.header-container');

function headerCreator(data) {
	let container = document.createElement('div');
	container.classList.add('header');
	let dateEl = document.createElement('span');
	dateEl.classList.add('date');
	let headingEl = document.createElement('h1');
	let tempEl = document.createElement('span');
	tempEl.classList.add('temp');

	// Add Text
	dateEl.textContent = data.date;
	headingEl.textContent = data.heading;
	tempEl.textContent = data.temp;

	// Append Header Elements
	container.appendChild(dateEl);
	container.appendChild(headingEl);
	container.appendChild(tempEl);

	// Always Return Component
	return container;
}

// Create Article Header
let header = headerCreator(data);

// Add Header to DOM
headerContainer.appendChild(header);
