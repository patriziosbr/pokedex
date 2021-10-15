import {Link} from "react-router-dom";
import React, { Component } from "react";
import axios from "axios";

class PokemonCatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toDelete : []
        };
    }

    releasePoke (id, e ) {
        Promise.all ([
            axios.delete(`http://localhost:8000/catched/${id}`),
            axios.delete(`http://localhost:8000/catchFromAll/${id}`),
        ]).then(res => {
            console.log(res.data);
            alert('are you sure you want release this pokemon? this action cannot be undone')
            const toDelete = this.props.pokemons.filter(item => item.id !== id)
            this.setState({ toDelete })
        });
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
                                </Link>
                                <div className="bottom">
                                    <form action="">
                                        <button className="btn-default btn-000 btn-catched" disabled>CATCHED</button>
                                        <button 
                                        className="btn-default btn-000 btn-release" 
                                        onClick={(e) => {this.releasePoke( pokemon.id, e )}}
                                        type="submit">RELEASE</button>
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


export default PokemonCatch;