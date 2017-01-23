import React from 'react';

const nullUser = {
	id: null,
	name: null,
	groups: []
};

class UserProperties extends React.Component {
	getGroupsAsString(groups) {
		var groupsString = '';
		for(var i in groups) {
			let group = groups[i];
			let separator = ''
			if(i > 0) {
				separator = ', ';
			}
			groupsString += separator + group.name;
		}
		return groupsString;
	}

	render() {
		const user = this.props.user || nullUser;
		var groups = this.getGroupsAsString(user.groups);
		return (
			<div>
				<p className="user-id">ID: {user.id}</p>
				<p className="user-name">Name: {user.name}</p>
				<p className="user-groups">Groups: {groups}</p>
			</div>
		)
	}
}

export { UserProperties as default }