import React from 'react';
import Select from './select';

class UserGroup extends React.Component {
	constructor() {
		super();
		this.state = {
			selectedUsers: [],
			selectedGroups: []
		}
	}

	addUserToGroup(event) {
		event.preventDefault();
	}

	setSelectedUsers(selectedUsers) {
		this.setState({
			selectedUsers: selectedUsers
		});
	}

	render() {
		const users = [
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
		];
		const groups = [
			{id: 1, name: 'The Simpsons'},
			{id: 2, name: 'The Bluths'}
		];
		return (
			<form onSubmit={this.addUserToGroup.bind(this)}>
				<Select title="All Users" list={users} clickHandler={this.setSelectedUsers.bind(this)} />
				<Select title="All Groups" list={groups} />
				<button type="submit">Assign User to Groups</button>
			</form>
		);
	}
}

export { UserGroup as default };