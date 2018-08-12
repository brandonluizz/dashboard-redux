import React from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from 'recharts'

const data = [
    { name: 'Janeiro', tpv: 4000, },
    { name: 'Fevereiro', tpv: 3000, },
    { name: 'Março', tpv: 2000, },
    { name: 'Abril', tpv: 2780, },
    { name: 'Junho', tpv: 1890, },
    { name: 'Julho', tpv: 2390, },
    { name: 'Agosto', tpv: 3490, },
]

export default class SimpleLineChart extends React.Component {
    render() {
        return (
            <div>
                <LineChart width={500} height={300} data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" name="TPV" dataKey="tpv" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </div>
        )
    }
}