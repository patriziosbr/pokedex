import {Link} from "react-router-dom";
import React, { Component } from "react";
import axios from "axios";

class PokemonToCatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    catchPokemonFromAll(thisPoke) {
        // console.log(this.state.pokeData); //the pokemon
        // let postPoke = this.props.pokemons;
        axios.post('http://localhost:8000/catchFromAll/',
        {
            name : thisPoke
        })
        .then( res => {
            if( this.props.pokemons.includes(res.data.name))  {
                return
            }
            console.log('res axios senno è triste in pokemonCard', res.data); //the pokemon
        }).catch( err => {
            console.log('axios error Post in pokemonCard', err);
            //alert in extremis
        })
    }
    render() {
        return(
            <div>
                {
                    this.props.pokemons.length > 0 && 
                    <div  className="card-box">
                    {this.props.pokemons.map((pokemon, key) => {
                        return (
                            <div className="card" key={key}>  
                                <Link
                                to={{
                                    pathname: `pokemon/${pokemon.name}`
                                }}>
                                    <h3 className="text-black mt-5">{pokemon.name}</h3>
                                    <div className="img-card">
                                        <img src={`https://img.pokemondb.net/artwork/vector/large/${pokemon.name}.png`} alt={pokemon.name}/>
                                    </div>
                                <div className="bottom">
                                    <button className="btn-default btn-000 mx-0">TO CATCH</button>
                                </div>
                                </Link>
                            </div>
                        )
                    })}

                    </div>
                }
                
            </div>
        )
    }
}


export default PokemonToCatch;