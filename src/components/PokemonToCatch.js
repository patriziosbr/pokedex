import {Link} from "react-router-dom";
import React, { Component } from "react";

class PokemonToCatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return(
            <div>
                {
                    this.props.pokemons.length === 0 && 
                    <div  className="card-box">
                    {this.props.allPoke.map((pokemon, key) => {
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
                    this.props.pokemons.length > 0 ? 
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

                    </div> : <div className="center-page">
                            <div className="center-item">
                                <h2>Well done,</h2>
                                <h2>watch your results:</h2>
                                <Link to={{
                                    pathname : "/catched"
                                }}>
                                <button className="btn-default btn-000 mx-0"> CATCHED </button>
                                </Link>
                            </div>
                        </div>
                }
                
            </div>
        )
    }
}


export default PokemonToCatch;