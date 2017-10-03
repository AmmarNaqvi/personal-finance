import React from "react";
import { Doughnut } from "react-chartjs-2";

const data = {
	labels: ["Red", "Green", "Yellow"],
	datasets: [
		{
			data: ["15", "25", "60"],
			backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
			hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
		}
	]
};

const DoughnutChart = props => {
	return (
		<div>
			<Doughnut data={props.data} />
		</div>
	);
};

export default DoughnutChart;
