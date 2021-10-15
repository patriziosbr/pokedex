import {Link} from "react-router-dom";
import React, { Component } from "react";
import axios from "axios";


class PokemonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    catchPokemonFromAll(thisPoke) {
        axios.post('http://localhost:8000/catchFromAll/',
        {
            name : thisPoke
        })
        .then( res => {
            if( this.props.pokemons.includes(res.data.name))  {
                return
            }
        }).catch( err => {
            console.log('axios error Post in pokemonCard', err);
            //alert in extremis
        });
    }

    render() {
        return (
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
                                    <form className="form-catch" >
                                        <button className={ 
                                            this.props.catchFromAllTest.find( x => x.name === pokemon.name ) ? 'btn-default btn-000  btn-catched'
                                            :  this.props.catchedDeatilTest.find( x => x.name === pokemon.name ) ? 'btn-default btn-000  btn-catched'
                                            : 'btn-default btn-000 btn-catch btn-hover'} onClick={() => { this.catchPokemonFromAll(pokemon.name) }} type="submit" disabled={ this.props.catchFromAllTest.find( x => x.name === pokemon.name )}>
                                            { this.props.catchFromAllTest.find( x => x.name === pokemon.name ) ? 'CATCHED' 
                                            :  this.props.catchedDeatilTest.find( x => x.name === pokemon.name ) ? 'CATCHED'
                                            : 'CATCH'}</button>
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