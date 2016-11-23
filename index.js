import React from 'react';
import ReactDom from 'react-dom';
import './src/menu';
import './src/css/main.css';

console.log('this works');
ReactDom.render(<div>aaaa</div>, document.getElementById('root'));

window.onhashchange = hash => {
	const currentHash = location.hash.replace(/#/, '');
	require.ensure(['./src/home', './src/logo'], 
		require => require(`./src/${currentHash}`));
	console.info(`[HASH] ${location.hash.replace(/#/, '')}`);
};

