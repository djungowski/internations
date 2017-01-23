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
			const groups =  [];
			const users = [];
			const pieChart = ReactTestUtils.renderIntoDocument(<PieChart id={id} groups={groups} users={users}/>);
			pieChart.componentDidMount();
			expect(Highcharts.chart).toHaveBeenCalledWith(id, jasmine.any(Object));
	    });

		it('transforms the data for the chart correctly', function(done) {
			const id = 'lorem-ipsum';
			const groups =  [
				{id: 1, name: 'One'},
				{id: 2, name: 'Two'},
				{id: 3, name: 'Three'},
				{id: 4, name: 'Four'}
			];
			const users = [
				{id: 1, groups: [{id: 1}]},
				{id: 2, groups: [{id: 2}, {id: 3}]},
				{id: 3, groups: [{id: 3}]},
				{id: 4, groups: []}
			];

			Highcharts.chart.and.callFake((id, chartConfig) => {
				const expectedData = [
					{id: 1, name: 'One', y: 1},
					{id: 2, name: 'Two', y: 1},
					{id: 3, name: 'Three', y: 2},
					{id: 4, name: 'Four', y: 0},
					{id: -1, name: 'Unassigned', y: 1}
				];
				expect(chartConfig.series[0].data).toEqual(expectedData);
				done();
			});

			const pieChart = ReactTestUtils.renderIntoDocument(<PieChart id={id} groups={groups} users={users}/>);
			pieChart.componentDidMount();
		});

		describe('componentDidUpdate', function() {
		    it('sets the data correctly', function(done) {
				const id = 'lorem-ipsum';
				const groups =  [
					{id: 1, name: 'One'},
					{id: 2, name: 'Two'},
					{id: 3, name: 'Three'},
					{id: 4, name: 'Four'}
				];
				const users = [
					{id: 1, groups: [{id: 1}]},
					{id: 2, groups: [{id: 2}, {id: 3}]},
					{id: 3, groups: [{id: 3}]},
					{id: 4, groups: []}
				];

				const pieChart = ReactTestUtils.renderIntoDocument(<PieChart id={id} groups={groups} users={users}/>);

				Highcharts.chart.and.callFake((id, config) => {
					return config;
				});

				pieChart.componentDidMount();
				pieChart.chart.series[0].setData = jasmine.createSpy('setData');
				pieChart.chart.series[0].setData.and.callFake((seriesDataFlat) => {
					const expectedData = [1, 1, 2, 0, 1]
					expect(seriesDataFlat).toEqual(expectedData);
					done();
				});

				pieChart.componentDidUpdate();
		    });
		});
	});
});