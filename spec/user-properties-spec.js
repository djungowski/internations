import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import UserProperties from '../lib/user-properties'

describe('UserProperties component tests', function() {
	let shallowRenderer;

	beforeEach(function() {
	    shallowRenderer = ReactTestUtils.createRenderer();
	});

    it('can be rendered without a user', function() {
		shallowRenderer.render(<UserProperties />);
		const result = shallowRenderer.getRenderOutput();
		expect(result.type).toEqual('div');
    });

	it('shows the user name, id and groups', function() {
		const groups = [{id: 1, name: 'Futurama'}, {id: 2, name: 'Animated'}];
		const user = {id: 5, name: 'Dr. Zoidberg', groups: groups}
		shallowRenderer.render(<UserProperties user={user} />);
		const result = shallowRenderer.getRenderOutput();
		expect(result.props.children[0]).toEqual(<p className="user-id">ID: {user.id}</p>);
		expect(result.props.children[1]).toEqual(<p className="user-name">Name: {user.name}</p>);
		expect(result.props.children[2]).toEqual(<p className="user-groups">Groups: Futurama, Animated</p>);
	});
});