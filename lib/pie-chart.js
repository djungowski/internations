import React from 'react';
import ReactDOM from 'react-dom';
import Highcharts from 'highcharts';

class PieChart extends React.Component {
	constructor() {
		super();
		this.chart = null;
	};

	render() {
		return(
			<div id={this.props.id} className="chart"></div>
		)
	}

	getChartSeriesData() {
		var series = this.props.groups.slice();
		series.push({id: -1, name: 'Unassigned'});

		var groupCount = {
			"-1": 0
		};

		this.props.users.forEach((user) => {
			if (user.groups.length == 0) {
				groupCount[-1]++;
			} else {
				user.groups.forEach((group) => {
					if (groupCount[group.id] == undefined) {
						groupCount[group.id] = 0;
					}

					groupCount[group.id]++;
				});
			}
		});

		series.forEach((group) => {
			group.y = groupCount[group.id] || 0
		});

		return series;
	}

	componentDidUpdate() {
		const seriesData = this.getChartSeriesData();
		const seriesDataFlat = seriesData.map((item) => {
			return item.y
		});
		this.chart.series[0].setData(seriesDataFlat);
	}

	componentDidMount() {
		const seriesData = this.getChartSeriesData();

		const chart = Highcharts.chart(this.props.id, {
			chart: {
				type: 'pie'
			},
			title: {
				text: 'Users by Groups'
			},
			plotOptions: {
				pie: {
					dataLabels: {
						enabled: true
					}
				}
			},
			series: [{
				name: 'Users by groups',
				colorByPoint: true,
				data: seriesData
			}]
		});

		this.chart = chart;
	};
}

export { PieChart as default }