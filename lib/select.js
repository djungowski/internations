class Select extends React.Component {
	render() {
		var optionList = [];
		for(var i in this.props.list) {
			optionList.push(<option>{this.props.list[i]}</option>);
		}

		return (
			<div>
				<h2>{this.props.title}</h2>
				<select multiple>{optionList}</select>
			</div>
		);
	}
}