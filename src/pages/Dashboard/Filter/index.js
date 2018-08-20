import React from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap'

class Filter extends React.Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.props.onChange(event.target.value)
    }

    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="filterSelect">Selecione uma opção</Label>
                    <Input type="select" name="select" id="filterSelect" onChange={this.handleChange}>
                        <option value="0">Filtro 1</option>
                        <option value="1">Filtro 2</option>
                        <option value="2">Filtro 3</option>
                    </Input>
                </FormGroup>
            </Form>
        )
    }
}

export default Filter