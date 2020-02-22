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

function Header() {
	let header = document.createElement('div').setAttribute('class', 'header');
	let date = document.createElement('span').setAttribute('class', 'date');
	let heading = document.createElement('h1');
	let temp = document.createElement('span').setAttribute('class', 'temp');

	// Append Header Elements
	header.appendChild(date);
	header.appendChild(heading);
	header.appendChild(temp);

	// Add Header to DOM
	let headerContainer = document.querySelector('.header-container');
	headerContainer.appendChild(header);

	// console.log('Are YOU here?');
}
