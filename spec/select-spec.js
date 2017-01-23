import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import Select from '../lib/select';

describe('Select component tests', () => {
	let shallowRenderer;

	beforeEach(() => {
		shallowRenderer = ReactTestUtils.createRenderer();
	});

    it('can be rendered', () => {
		shallowRenderer.render(<Select />)
		const result = shallowRenderer.getRenderOutput();
		expect(result.type).toBe('div');
	});

	it('renders the title', () => {
	    shallowRenderer.render(<Select title="Michael Bluth" />);
		const result = shallowRenderer.getRenderOutput();
		expect(result.props.children[0]).toEqual(<h2>Michael Bluth</h2>);
	});

	it('renders the select list', () => {
		const users = [
			{id: 1, name: 'Bernd'},
			{id: 2, name: 'Brot'}
		];
		shallowRenderer.render(<Select list={users} />);
		const result = shallowRenderer.getRenderOutput();
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

	describe('onClick', () => {
	    it('calls the given clickHandler with the selected options', () => {
			const selectedOptions = [1, 2, 3];
			const callback = jasmine.createSpy('clickHandler');
			const result = ReactTestUtils.renderIntoDocument(<Select clickHandler={callback} />);
			const eventMock = { target: { parentNode: { selectedOptions: selectedOptions } } };
			result.onClick(eventMock);
			expect(callback).toHaveBeenCalledWith(selectedOptions);
	    });

		it('does not break if no click handler is provided', () => {
			const callback = jasmine.createSpy('clickHandler');
			const result = ReactTestUtils.renderIntoDocument(<Select />);
			const eventMock = {};
			result.onClick(eventMock);
			expect(callback).not.toHaveBeenCalledWith();
		});
	});
});