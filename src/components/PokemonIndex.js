import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      pokemons: [],
      filteredPokemon: [],
      filter: ''
    }

    fetch("http://localhost:3000/pokemon")
    .then(res => res.json())
    .then(pokemons => {
      this.setState({pokemons, filteredPokemon: pokemons})
    })

    this.filterPokemon = this.filterPokemon.bind(this)
    this.addPokemon = this.addPokemon.bind(this)
  }

  filterPokemon(ev) {
    const filteredPokemon = this.state.pokemons.filter(pokemon => pokemon.name.includes(ev.target.value))
    this.setState({filteredPokemon, filter: ev.target.value})
  }

  addPokemon(ev){
    ev.preventDefault()
    console.log(ev.target.elements['name'].value, ev.target.elements['hp'].value, ev.target.elements['frontUrl'].value, ev.target.elements['backUrl'].value)
    this.setState({
      pokemons: [...this.state.pokemons, {
        name: ev.target.elements['name'].value,
        stats: [{name: 'hp', value: ev.target.elements['hp'].value}],
        sprites: {
          front: ev.target.elements['frontUrl'].value,
          back: ev.target.elements['backUrl'].value
        }
      }]
    })
  }

  static getDerivedStateFromProps(props, state){
    return {filteredPokemon: state.pokemons.filter(pokemon => pokemon.name.includes(state.filter))}
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <PokemonForm handleSubmit={this.addPokemon}/>
        <br />
        <Search onSearchChange={this.filterPokemon} />
        <br />
        <PokemonCollection pokemons={this.state.filteredPokemon}/>
        <br />

      </div>
    )
  }
}

export default PokemonPage
