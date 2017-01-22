function App() {
	const users = ['Horst', 'Egon'];
	return (
		<div>
			<Select title="All Users" list={users} />
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