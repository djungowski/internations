import Select from './select';
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
	const users = ['Horst', 'Egon'];
	const groups = [
		'Admin',
		'1337',
		'Hax0r',
		'Arrested Development',
		'The Bluths'
	];
	return (
		<div>
			<Select title="All Users" list={users} />
			<Select title="All Groups" list={groups} />
		</div>
	);
}

function initApp() {
	ReactDOM.render(
		<App />,
		document.getElementById('internations-root')
	);
}

window.addEventListener('load', initApp);