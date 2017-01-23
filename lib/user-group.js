import React from 'react';
import Select from './select';
import UserProperties from './user-properties';

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
				{id: 2, name: 'The Bluths'},
				{id: 3, name: 'The Sopranos'},
				{id: 4, name: 'The MacGyvers'},
				{id: 5, name: 'The Winnetous'}
			],
			selectedUsers: [],
			selectedGroups: [],
			currentUser: null
		}
	}

	__extractValuesAsInteger(domNodeList) {
		var selectedGroups = [];
		for(var i in domNodeList) {
			if (domNodeList.hasOwnProperty(i)) {
				var group = domNodeList[i];
				selectedGroups.push(parseInt(group.value));
			}
		}
		return selectedGroups;
	}

	__extractUsersByIds(ids, userList) {
		return userList.filter((user) => {
			if (ids.indexOf(user.id) != -1) {
				return user;
			}
		});
	}

	__extractGroupsByIds(ids) {
		return this.state.groups.filter((group) => {
			if (ids.indexOf(group.id) != -1) {
				return group;
			}
		});
	}

	addUsersToGroup(event) {
		event.preventDefault();
		// selectedGroups is a DOMNodeList and therefore doesn't have array functions. Let's convert it first
		const selectedGroupIds = this.__extractValuesAsInteger(this.state.selectedGroups);
		const selectedUserIds = this.__extractValuesAsInteger(this.state.selectedUsers);

		var usersCopy = this.state.users.slice();
		// Now get the actual groups and actual users
		const selectedUsers = this.__extractUsersByIds(selectedUserIds, usersCopy);
		const selectedGroups = this.__extractGroupsByIds(selectedGroupIds);

		selectedUsers.forEach((user) => {
			user.groups = selectedGroups
		});

		this.setState({
			users: usersCopy
		});
	}

	userClickHandler(selectedUsers, currentUser) {
		this.setState({
			selectedUsers: selectedUsers,
			currentUser: currentUser
		});
	}

	groupClickHandler(selectedGroups) {
		this.setState({
			selectedGroups: selectedGroups
		});
	}

	render() {
		return (
			<form onSubmit={this.addUsersToGroup.bind(this)}>
				<div className="col-md-4">
					<Select title="All Users" list={this.state.users} clickHandler={this.userClickHandler.bind(this)} />
				</div>
				<div className="col-md-4">
					<UserProperties user={this.state.currentUser} />
				</div>
				<div className="col-md-4">
					<Select title="All Groups" list={this.state.groups} clickHandler={this.groupClickHandler.bind(this)} />
				</div>
				<button className="btn btn-primary" type="submit">Set groups for selected users</button>
			</form>
		);
	}
}

export { UserGroup as default };