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
				<p class="user-id">{user.id}</p>
				<p class="user-name">{user.name}</p>
			</div>
		)
	}
}

export { UserProperties as default }