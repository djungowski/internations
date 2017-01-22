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
});