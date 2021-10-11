import { Component } from "react";
import axios from "axios";
import PokemonCard from './PokemonCard';
import Loader from "./Loading";


class Pokemons extends Component {
    state= {
        pokemons: [],
        loading: false,
    }
    async componentDidMount () {
        this.setState({loading : true})
        await axios.get("https://pokeapi.co/api/v2/pokemon")
        .then( res => {
            // console.log(res.data.results); //all pokemons
        this.setState({pokemons : res.data.results, loading : false })       
        }).catch( err => {
            console.log('axios error', err);
        })
    }
    render(){
        const {loading} = this.state;
        return(
            <div className="bg-poke">
                <div className="w-80">
                    <h1 className="title text-black" >All Pokemons</h1>
                    {
                        loading  ? <Loader /> : <PokemonCard pokemons={this.state.pokemons} />
                    }
                    {/* {
                        loading && <Loader /> 
                    }
                    {
                        <PokemonCard pokemons={this.state.pokemons} />
                    } */}
                </div>
            </div>
        )
    }
}
export default Pokemons;
