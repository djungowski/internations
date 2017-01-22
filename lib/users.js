class Users extends React.Component {
	render() {
		var userList = [];
		for(var i in this.props.users) {
			userList.push(<option>{this.props.users[i]}</option>);
		}

		return (
			<div>
				<h2>All Users</h2>
				<select multiple>{userList}</select>
			</div>
		);
	}
}