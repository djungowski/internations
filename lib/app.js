import UserGroup from './user-group';
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
	return (
		<UserGroup />
	);
}

function initApp() {
	ReactDOM.render(
		<App />,
		document.getElementById('internations-root')
	);
}

window.addEventListener('load', initApp);