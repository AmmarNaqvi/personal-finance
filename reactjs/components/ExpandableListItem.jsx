import React from "react";
import { ListItem, ListItemText } from "material-ui/List";
import Collapse from "material-ui/transitions/Collapse";

const formatDate = date =>
	new Date(date).toLocaleDateString("en-US", {
		month: "short",
		day: "numeric"
	});

const ExpandedListItem = props => {
	const transactions = props.transactions;
	const items = transactions.map(transaction => (
		<ListItem button key={transaction.id}>
			<ListItemText
				primary={transaction.amount + " PKR"}
				secondary={formatDate(transaction.created_at)}
			/>
		</ListItem>
	));
	return <ul>{items}</ul>;
};

class ExpandableListItem extends React.Component {
	state = { collapsed: false };

	handleClick = () => {
		this.setState({ collapsed: !this.state.collapsed });
	};

	render() {
		return (
			<div>
				<ListItem button onClick={this.handleClick}>
					<ListItemText primary={this.props.category.name} />
				</ListItem>
				<Collapse
					in={this.state.collapsed}
					transitionDuration="auto"
					unmountOnExit
				>
					<ExpandedListItem
						transactions={this.props.category.transactions}
					/>
				</Collapse>
			</div>
		);
	}
}

export default ExpandableListItem;
