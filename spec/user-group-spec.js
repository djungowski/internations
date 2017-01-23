import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

describe('User group component tests', () => {
	let shallowRenderer;
	let UserGroup;

	beforeEach(() => {
		const inject = require('inject-loader!../lib/user-group');

		UserGroup = inject({
			'./pie-chart': () => {
				return <div></div>
			}
		}).default;

		shallowRenderer = ReactTestUtils.createRenderer();
	});

    it('can be rendered', () => {
		shallowRenderer.render(<UserGroup />)
		const result = shallowRenderer.getRenderOutput();
		expect(result.type).toBe('form');
    });

	it('has a default state', () => {
	    const userGroup = ReactTestUtils.renderIntoDocument(<UserGroup />);
		expect(userGroup.state).toEqual({
			users: jasmine.any(Array),
			groups: jasmine.any(Array),
			selectedUsers: [],
			selectedGroups: [],
			currentUser: null
		});
	});

	describe('#userClickHandler()', () => {
	    it('sets the selected users', () => {
			const selectedUsers = {};
			const userGroup = ReactTestUtils.renderIntoDocument(<UserGroup />);
			userGroup.userClickHandler(selectedUsers);
			expect(userGroup.state.selectedUsers).toBe(selectedUsers);
	    });

		it('sets the currentUser', function() {
			const selectedUsers = {};
			const currentUser = {};
			const userGroup = ReactTestUtils.renderIntoDocument(<UserGroup />);
			userGroup.userClickHandler(selectedUsers, currentUser);
			expect(userGroup.state.currentUser).toBe(currentUser);
		});
	});

	describe('#groupClickHandler()', () => {
		it('sets the selected groups', () => {
			const selectedGroups = {};
			const userGroup = ReactTestUtils.renderIntoDocument(<UserGroup />);
			userGroup.groupClickHandler(selectedGroups);
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

			userGroup.userClickHandler(selectedUsers);
			userGroup.groupClickHandler(selectedGroups);
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