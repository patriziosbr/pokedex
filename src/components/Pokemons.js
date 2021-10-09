import { Component } from "react";
import axios from "axios";


class Pokemons extends Component {
    state= {
        pokemons: [],
    }
    componentDidMount () {
        axios.get("https://pokeapi.co/api/v2/pokemon")
        .then( res => {
            console.log(res);
        }).catch( err => {
            console.log('axios error', err);
        })
    }
    render(){
        return(
            <div>
                <h2>Pokemon</h2>
            </div>
        )
    }
}
export default Pokemons;