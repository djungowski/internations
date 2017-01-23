import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import UserGroup from '../lib/user-group';

describe('User group component tests', () => {
	let renderer;

	beforeEach(() => {
		renderer = ReactTestUtils.createRenderer();
	});

    it('can be rendered', () => {
		renderer.render(<UserGroup />)
		const result = renderer.getRenderOutput();
		expect(result.type).toBe('form');
    });

	it('has a default state', () => {
	    const userGroup = ReactTestUtils.renderIntoDocument(<UserGroup />);
		expect(userGroup.state).toEqual({
			users: jasmine.any(Array),
			groups: jasmine.any(Array),
			selectedUsers: [],
			selectedGroups: []
		});
	});

	describe('#setSelectedUsers()', () => {
	    it('alters the state', () => {
			const selectedUsers = {};
			const userGroup = ReactTestUtils.renderIntoDocument(<UserGroup />);
			userGroup.setSelectedUsers(selectedUsers);
			expect(userGroup.state.selectedUsers).toBe(selectedUsers);
	    });
	});

	describe('#setSelectedGroups()', () => {
		it('alters the state', () => {
			const selectedGroups = {};
			const userGroup = ReactTestUtils.renderIntoDocument(<UserGroup />);
			userGroup.setSelectedGroups(selectedGroups);
			expect(userGroup.state.selectedGroups).toBe(selectedGroups);
		});
	});

	describe('#addUsersToGroup', () => {
	    it('prevents the default', () => {
	        const eventMock = jasmine.createSpyObj('event', ['preventDefault']);
			const userGroup = ReactTestUtils.renderIntoDocument(<UserGroup />);
			userGroup.addUsersToGroup(eventMock);
			expect(eventMock.preventDefault).toHaveBeenCalled();
	    });

		it('changes the groups for the selected users', () => {
			const eventMock = jasmine.createSpyObj('event', ['preventDefault']);
			const userGroup = ReactTestUtils.renderIntoDocument(<UserGroup />);

			const selectedUsers = [
				{value: 1},
				{value: 6}
			];
			const selectedGroups = [
				{value: 2},
				{value: 5}
			];

			userGroup.setSelectedUsers(selectedUsers);
			userGroup.setSelectedGroups(selectedGroups);
			userGroup.addUsersToGroup(eventMock);

			expect(userGroup.state.users[0].groups[0]).toBe(userGroup.state.groups[1])
			expect(userGroup.state.users[0].groups[1]).toBe(userGroup.state.groups[4])

			expect(userGroup.state.users[5].groups[0]).toBe(userGroup.state.groups[1])
			expect(userGroup.state.users[5].groups[1]).toBe(userGroup.state.groups[4])

			// Any other user must not have any groups
			expect(userGroup.state.users[2].groups.length).toBe(0)
		});
	});
});