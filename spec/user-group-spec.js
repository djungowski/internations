import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import UserGroup from '../lib/user-group';

describe('User group component tests', function() {
	beforeEach(function() {
		this.renderer = ReactTestUtils.createRenderer();
	});

    it('can be rendered', function() {
		this.renderer.render(<UserGroup />)
		const result = this.renderer.getRenderOutput();
		expect(result.type).toBe('form');
    });

	it('has a default state', function() {
	    const userGroup = ReactTestUtils.renderIntoDocument(<UserGroup />);
		expect(userGroup.state).toEqual({
			users: jasmine.any(Array),
			groups: jasmine.any(Array),
			selectedUsers: [],
			selectedGroups: []
		});
	});

	describe('#setSelectedUsers()', function() {
	    it('alters the state', function() {
			const selectedUsers = {};
			const userGroup = ReactTestUtils.renderIntoDocument(<UserGroup />);
			userGroup.setSelectedUsers(selectedUsers);
			expect(userGroup.state.selectedUsers).toBe(selectedUsers);
	    });
	});

	describe('#setSelectedGroups()', function() {
		it('alters the state', function() {
			const selectedGroups = {};
			const userGroup = ReactTestUtils.renderIntoDocument(<UserGroup />);
			userGroup.setSelectedGroups(selectedGroups);
			expect(userGroup.state.selectedGroups).toBe(selectedGroups);
		});
	});

	describe('#addUserToGroup', function() {
	    it('prevents the default', function() {
	        const eventMock = jasmine.createSpyObj('event', ['preventDefault']);
			const userGroup = ReactTestUtils.renderIntoDocument(<UserGroup />);
			userGroup.addUserToGroup(eventMock);
			expect(eventMock.preventDefault).toHaveBeenCalled();
	    });
	});
});