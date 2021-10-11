import {Link} from "react-router-dom";
import React, { Component } from "react";

class PokemonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props,
            pippo : []
        };

    }
    handleSubmit(e) {
        e.preventDefault();
        console.log('Hai cliccato Invia.');
        

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
                                    <div className="img-card">
                                        <img src={`https://img.pokemondb.net/artwork/vector/large/${pokemon.name}.png`} alt={pokemon.name}/>
                                    </div>
                                </Link>
                                <div className="bottom">
                                    <h4 className="text-black">{pokemon.name}</h4>
                                    <form onSubmit={this.handleSubmit}>
                                        <button className="btn-default btn-000 mx-0"  type="submit">CATCH</button>
                                    </form>
                                </div>
                            </div>
                        )
                    })}
                </div>
                }
                
            </div>
        )
    }
}


export default PokemonCard;