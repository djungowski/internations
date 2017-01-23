import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import PieChart from '../lib/pie-chart';

describe('PieChart component tests', function() {
	let shallowRenderer;

	beforeEach(() => {
		shallowRenderer = ReactTestUtils.createRenderer();
	});

	it('can be rendered', () => {
		shallowRenderer.render(<PieChart />)
		const result = shallowRenderer.getRenderOutput();
		expect(result.type).toBe('div');
	});
});