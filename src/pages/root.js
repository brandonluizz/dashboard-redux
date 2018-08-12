import React from 'react'
import Header from '../components/Header'
import Routes from './routes';
import {
    Container
} from 'reactstrap'

export default props => (
    <div>
        <div className="App">
            <Header />
            <Container style={{ marginTop: '10px'}}>
                <Routes />
            </Container>
        </div>
    </div>
)