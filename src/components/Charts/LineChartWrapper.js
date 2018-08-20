import React from 'react'
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts'

export default class LineChartWrapper extends React.Component {
    render() {
        return (
            <ResponsiveContainer>
                <AreaChart data={this.props.data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type='monotone' dataKey='value' name="Quantidade" stroke='#00974C' fill='#00974C' />
                </AreaChart>
            </ResponsiveContainer>
        )
    }
}

