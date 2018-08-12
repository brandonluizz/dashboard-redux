import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
    , Container, Row, Col
} from 'reactstrap'
import SimpleLineChart from '../../components/Charts/Line'

class Dashboard extends React.Component {

    render() {
        return (
            <div>
                <Row>
                    <Col xs="12" sm="6">
                        <Card>
                            <CardBody>
                                <CardTitle>TPV de Transações</CardTitle>
                            </CardBody>
                            <SimpleLineChart />
                        </Card>
                    </Col>
                    <Col xs="12" sm="6" lg="6" md="6">
                        <Card>
                            <CardBody>
                                <CardTitle>Gráfico 2</CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Dashboard