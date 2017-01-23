import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
//import PieChart from '../lib/pie-chart';

describe('PieChart component tests', function() {
	let shallowRenderer;
	let PieChart;
	let Highcharts;

	beforeEach(() => {
		const inject = require('inject-loader!../lib/pie-chart');
		
		Highcharts = {
			chart: jasmine.createSpy('highcharts')
		};

		PieChart = inject({
			highcharts: Highcharts
		}).default;

		shallowRenderer = ReactTestUtils.createRenderer();
	});

	it('can be rendered', () => {
		shallowRenderer.render(<PieChart id="foo" />)
		const result = shallowRenderer.getRenderOutput();
		expect(result.type).toBe('div');
	});

	describe('#componentDidMount', function() {
	    it('creates a chart in the provided id', function() {
			const id = 'lorem-ipsum';
			const pieChart = ReactTestUtils.renderIntoDocument(<PieChart id={id} />);
			pieChart.componentDidMount();
			expect(Highcharts.chart).toHaveBeenCalledWith(id, jasmine.any(Object));
	    });
	});
});