import { Component } from "react";
import axios from "axios";
import PokemonCard from './PokemonCard'


class Pokemons extends Component {
    state= {
        pokemons: [],
        loading: false,
    }
    async componentDidMount () {
        this.setState({loading : true})
        await axios.get("https://pokeapi.co/api/v2/pokemon")
        .then( res => {
            console.log(res.data.results); //all pokemons
        this.setState({pokemons : res.data.results, loading : false })       
        }).catch( err => {
            console.log('axios error', err);
        })
    }
    render(){
        const {loading} = this.state
        return(
            <div>
                {
                    loading && <p>Loading...</p>
                }
                {
                    <PokemonCard pokemons={this.state.pokemons} />
                }
            </div>
        )
    }
}
export default Pokemons;
// https://assets.pokemon.com/static2/_ui/img/chrome/container_bg.png