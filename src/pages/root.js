import React from 'react'
import './root.css'
import Header from '../components/Header'
import Routes from './routes'
import {
    Container
} from 'reactstrap'

export default props => (
    <div>
        <div className="App">
            <Header />
            <Container className="customContainer">
                <Routes />
            </Container>
        </div>
    </div>
)