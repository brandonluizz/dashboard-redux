import React from 'react'
import {
	PieChart,
	Pie,
	Tooltip,
	ResponsiveContainer,
} from 'recharts'

export default class PieChartWrapper extends React.Component {
	render() {
		return (
			<ResponsiveContainer>
				<PieChart>
					<Pie isAnimationActive={true} dataKey="value" data={this.props.data} fill="#8884d8" />
					<Tooltip />
				</PieChart>
			</ResponsiveContainer>
		)
	}
}

