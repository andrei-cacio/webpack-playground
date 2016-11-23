import webpackLogo from './webpacklogo.jpg';
const img = document.createElement('img');
img.src = webpackLogo;console.log('here');


module.exports = {
	mount: () => {
		document.getElementById('root').innerHTML = '';
		document.getElementById('root').appendChild(img);		
	}
}