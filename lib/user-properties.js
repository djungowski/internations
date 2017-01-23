import React from 'react';

const nullUser = {
	id: null,
	name: null,
	groups: []
};

class UserProperties extends React.Component {
	render() {
		const user = this.props.user || nullUser;
		return (
			<div>
				<p className="user-id">ID: {user.id}</p>
				<p className="user-name">Name: {user.name}</p>
			</div>
		)
	}
}

export { UserProperties as default }