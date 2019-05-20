import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }

    this.formChange = this.formChange.bind(this)
  }

  formChange(ev){
    this.setState({
      [ev.target.name]: ev.target.value
    })
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.props.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.formChange} value={this.state.name}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.formChange} value={this.state.hp}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" onChange={this.formChange} name="frontUrl" value={this.state.frontUrl}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" onChange={this.formChange} name="backUrl" value={this.state.backUrl}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
