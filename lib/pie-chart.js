import React from 'react';
import ReactDOM from 'react-dom';
import Highcharts from 'highcharts';

class PieChart extends React.Component {
	render() {
		return(
			<div id={this.props.id}></div>
		)
	}

	componentDidMount() {
		const chart = Highcharts.chart(this.props.id, {
			chart: {
				type: 'pie'
			},
			plotOptions: {
				pie: {
					dataLabels: {
						enabled: true
					}
				}
			},
			series: [{
				name: 'Brands',
				colorByPoint: true,
				data: [{
					name: 'Microsoft Internet Explorer',
					y: 56.33
				}, {
					name: 'Chrome',
					y: 24.03,
					sliced: true,
					selected: true
				}, {
					name: 'Firefox',
					y: 10.38
				}, {
					name: 'Safari',
					y: 4.77
				}, {
					name: 'Opera',
					y: 0.91
				}, {
					name: 'Proprietary or Undetectable',
					y: 0.2
				}]
			}]
		});
	};
}

export { PieChart as default }