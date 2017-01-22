import React from 'react';
import Select from './select';

class UserGroup extends React.Component {
	constructor() {
		super();
		this.state = {
			users: [
				{id: 1, name: 'Michael', groups: []},
				{id: 2, name: 'George', groups: []},
				{id: 3, name: 'Lucille', groups: []},
				{id: 4, name: 'Maebe', groups: []},
				{id: 5, name: 'Tobias', groups: []},
				{id: 6, name: 'Homer', groups: []},
				{id: 7, name: 'Marge', groups: []},
				{id: 8, name: 'Bart', groups: []},
				{id: 9, name: 'Lisa', groups: []},
				{id: 10, name: 'Maggie', groups: []}
			],
			groups: [
				{id: 1, name: 'The Simpsons'},
				{id: 2, name: 'The Bluths'}
			],
			selectedUsers: [],
			selectedGroups: []
		}
	}

	addUsersToGroup(event) {
		event.preventDefault();
	}

	setSelectedUsers(selectedUsers) {
		this.setState({
			selectedUsers: selectedUsers
		});
	}

	setSelectedGroups(selectedGroups) {
		this.setState({
			selectedGroups: selectedGroups
		});
	}

	render() {
		return (
			<form onSubmit={this.addUsersToGroup.bind(this)}>
				<Select title="All Users" list={this.state.users} clickHandler={this.setSelectedUsers.bind(this)} />
				<Select title="All Groups" list={this.state.groups} clickHandler={this.setSelectedGroups.bind(this)} />
				<button type="submit">Assign User to Groups</button>
			</form>
		);
	}
}

export { UserGroup as default };