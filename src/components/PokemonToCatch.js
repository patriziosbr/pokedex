import {Link} from "react-router-dom";
import React, { Component } from "react";
import axios from "axios";

class PokemonToCatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allPoke : []
        };
    }
    async componentDidMount() {
        await axios.get("https://pokeapi.co/api/v2/pokemon")
        .then(res => {
            console.log(res);
            this.setState({allPoke : res.data.results})
        }).catch(err => {
            console.log('err in to catch',err);
        })
    }
    render() {
        return(
            <div>
                {
                    this.props.pokemons.length === 0 && 
                    <div  className="card-box">
                    {this.state.allPoke.map((pokemon, key) => {
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