import React from "react";
import List from "material-ui/List";
import ExpandableListItem from "./ExpandableListItem";

const NestedList = props => {
	const categories = props.data.map(category => (
		<div key={category.id}>
			<ExpandableListItem category={category} />
		</div>
	));
	return <List>{categories}</List>;
};

export default NestedList;
