import React from 'react'
import { connect } from 'react-redux'
import {
    Card,
    CardBody,
    CardTitle,
    Row,
    Col,
} from 'reactstrap'
import './index.css'
import {
    LineChartWrapper,
    PieChartWrapper
} from '../../components/Charts'
import Filter from './Filter'
import { dashboardChange } from './actions'
import summaryData from './summaryData'

const mapStateToProps = ({ dashboard: { summary: { totalSales, salesPerCardBrand } } }) =>
    ({ totalSales, salesPerCardBrand })
const mapDispatchToProps = dispatch => ({
    onChangeRequest: (data) => {
        dispatch(dashboardChange(data))
    }
})
class Dashboard extends React.Component {
    constructor(props) {
        super(props)

        this.onChangeFilter = this.onChangeFilter.bind(this)
    }

    componentDidMount() {
        const initialData = summaryData[0]

        this.props.onChangeRequest(initialData)
    }

    onChangeFilter(index) {
        this.props.onChangeRequest(summaryData[index])
    }

    render() {
        const { totalSales, salesPerCardBrand } = this.props

        return (
            <div>
                <Row>
                    <Col xs="12" sm="6">
                        <Filter onChange={this.onChangeFilter} />
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" sm="6">
                        <Card className="chartContainer">
                            <CardBody >
                                <CardTitle>Todas as Vendas</CardTitle>
                            </CardBody>
                            <LineChartWrapper data={totalSales} />
                        </Card>
                    </Col>
                    <Col xs="12" sm="6">
                        <Card className="chartContainer">
                            <CardBody>
                                <CardTitle>Vendas por Bandeiras</CardTitle>
                            </CardBody>
                            <PieChartWrapper data={salesPerCardBrand} />
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)