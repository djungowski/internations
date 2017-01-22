import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import Select from '../lib/select';

describe('Select component tests', function() {
	beforeEach(function() {
		this.renderer = ReactTestUtils.createRenderer();
	});

    it('can be rendered', function() {
		this.renderer.render(<Select />)
		const result = this.renderer.getRenderOutput();
		expect(result.type).toBe('div');
	});

	it('renders the title', function() {
	    this.renderer.render(<Select title="Michael Bluth" />);
		const result = this.renderer.getRenderOutput();
		expect(result.props.children[0]).toEqual(<h2>Michael Bluth</h2>);
	});

	it('renders the select list', function() {
		const users = [
			{id: 1, name: 'Bernd'},
			{id: 2, name: 'Brot'}
		];
		this.renderer.render(<Select list={users} />);
		const result = this.renderer.getRenderOutput();
		const select = result.props.children[1];
		expect(select.props.children[0].props).toEqual({
			onClick: jasmine.any(Function),
			value: 1,
			children: 'Bernd'
		});
		expect(select.props.children[1].props).toEqual({
			onClick: jasmine.any(Function),
			value: 2,
			children: 'Brot'
		});
	});
});