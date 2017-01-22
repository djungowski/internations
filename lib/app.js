function App() {
	const users = ['Horst', 'Egon'];
	return (
		<div>
			<Select list={users} />
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