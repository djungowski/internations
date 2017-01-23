import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import UserProperties from '../lib/user-properties'

describe('UserProperties component tests', () => {
	let shallowRenderer;

	beforeEach(() => {
	    shallowRenderer = ReactTestUtils.createRenderer();
	});

    it('can be rendered without a user', () => {
		shallowRenderer.render(<UserProperties />);
		const result = shallowRenderer.getRenderOutput();
		expect(result.type).toEqual('div');
    });

	it('shows the user name, id and groups', () => {
		const groups = [{id: 1, name: 'Futurama'}, {id: 2, name: 'Animated'}];
		const user = {id: 5, name: 'Dr. Zoidberg', groups: groups}
		shallowRenderer.render(<UserProperties user={user} />);
		const result = shallowRenderer.getRenderOutput();
		expect(result.props.children).toEqual([
			<h2>Selected user info</h2>,
			<p className="user-id">ID: {user.id}</p>,
			<p className="user-name">Name: {user.name}</p>,
			<p className="user-groups">{["Groups: ", "Futurama, Animated"]}</p>
		]);
	});
});