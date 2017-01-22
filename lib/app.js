function App() {
	return (
		<div>
			<Users />
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