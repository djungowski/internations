import React from 'react';

class Select extends React.Component {
	onClick(event) {
		this.props.clickHandler(event.target.parentNode.selectedOptions);
	}

	render() {
		var optionList = [];
		for(var i in this.props.list) {
			let item = this.props.list[i];
			optionList.push(<option onClick={this.onClick.bind(this)} key={item.id} value={item.id}>{item.name}</option>);
		}

		const select = <select multiple>{optionList}</select>;

		return (
			<div>
				<h2>{this.props.title}</h2>
				{select}
			</div>
		);
	}
}

export { Select as default };