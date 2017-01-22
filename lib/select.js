import React from 'react';

class Select extends React.Component {
	render() {
		var optionList = [];
		for(var i in this.props.list) {
			let item = this.props.list[i];
			optionList.push(<option key={item.id} value={item.id}>{item.name}</option>);
		}

		return (
			<div>
				<h2>{this.props.title}</h2>
				<select multiple>{optionList}</select>
			</div>
		);
	}
}

module.exports = Select;