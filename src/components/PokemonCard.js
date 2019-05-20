import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      frontView: true
    }
    this.flipView = this.flipView.bind(this)
  }

  flipView(){
    this.setState({
      frontView: !this.state.frontView
    })
  }

  render() {
    return (
      <Card>
        <div>
          <div className="image">
            <img onClick={this.flipView} src={this.state.frontView ? this.props.pokemon.sprites.front : this.props.pokemon.sprites.back} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats.find(stat => stat.name ==='hp').value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
