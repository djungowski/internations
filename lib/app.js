import Select from './select';
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
	const users = [
		{id: 1, name: 'Horst'},
		{id: 2, name: 'Egon'}
	];
	const groups = [
		{id: 1, name: 'The Simpsons'},
		{id: 2, name: 'The Bluths'}
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