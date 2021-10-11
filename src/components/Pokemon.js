import { Component } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const TYPE_COLORS = {
    bug: 'B1C12E',
    dark: '4F3A2D',
    dragon: '755EDF',
    electric: 'FCBC17',
    fairy: 'F4B1F4',
    fighting: '823551D',
    fire: 'E73B0C',
    flying: 'A3B3F7',
    ghost: '6060B2',
    grass: '74C236',
    ground: 'D3B357',
    ice: 'A3E7FD',
    normal: 'C8C4BC',
    poison: '934594',
    psychic: 'ED4882',
    rock: 'B9A156',
    steel: 'B5B5C3',
    water: '3295F6'
  };

class Pokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            pokeData: [],
            init: 0
        }
    }
    async componentDidMount () {
        this.setState({loading : true})
        await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.name}`)
        .then( res => {
            // console.log(res.data); //all info single poke
            // console.log(res.data.types);
        this.setState({pokeData : res.data, loading : false, init: 1 });
        }).catch( err => {
            console.log('axios error', err);
        })
    }
    renderTypes() {
        return <div  className="chip-box">
        {this.state.pokeData.types.map((ele, index) =>
            <div key={index} className="btn-default btn-000 chip" 
            style={{ backgroundColor: `#${TYPE_COLORS[ele.type.name]}`, color: 'white', border : 0}}>
            {ele.type.name}
            </div>
          )}
          </div>
        }
    renderStats() {
        return <div  className="stats-box">
        {this.state.pokeData.stats.map((ele, index) =>
            <div className="single-skill mb-5" key={index}>
                <div className="label"> 
                    <label><strong>{ele.stat.name}: </strong> </label> 
                    <p>{ele.base_stat}</p>
                </div>
                <div>
                    <input type="range" min="0" max="100" value={ele.base_stat} readOnly/>
                </div>
                
            </div>
          )}
          </div>
        }
        currentPokemon(pokename) {
            console.log(pokename);
        }
        handleSubmit(e) {
            e.preventDefault();
            console.log('Hai cliccato Invia.');
          }
    
    render() {
        const {pokeData } = this.state;
        // console.log( pokeData); //array filled
        return (
            <div className="bg-poke">
                <div className="w-80 pokemon-box">
                    <div className="mb-5">
                        <Link className="btn-default btn-000" to="/pokemons">
                            <i className="fas fa-arrow-left"></i>
                            <small>Back</small>
                        </Link>
                    </div>
                    <div className="singlePoke">
                    
                        {
                            pokeData.name ? 
                            <div className="detail-box">
                                <h1>{pokeData.name}</h1>
                                <div className="detail-img">
                                    <img src={`https://img.pokemondb.net/artwork/vector/large/${pokeData.name}.png`} alt={pokeData.name}/>
                                </div>
                            </div> : ''
                        }
                        {
                            this.state.init &&
                            <form onSubmit={this.handleSubmit}>
                                <button className="btn-default btn-000 mx-0" onClick={() => {this.currentPokemon(pokeData) }} type="submit">CATCH</button>
                            </form> 
                        }
                        <div className="type-chips">
                        {
                            this.state.init ?
                            <div>
                                <h4>Type: </h4>
                                {this.renderTypes()}
                            </div> : <div>Loader singolo da fare</div>
                        }
                        </div>{/* close typechips */}
                        {
                            this.state.init 
                            && 
                            <div className="mb-5">
                                <h4 className="mb-5" >Details:</h4> 
                                <div>
                                    <p>
                                        <strong>Height: </strong> { (pokeData.height / 10) + ' m'}
                                    </p>
                                    <p>
                                        <strong>Weight: </strong> { (pokeData.weight / 10) + ' kg'}
                                    </p>
                                </div>
                            </div>
                        }     
                        {     
                            this.state.init 
                            &&          
                            <div>
                                <h4 className="mb-5">Technical Details: </h4>
                                {this.renderStats()}
                            </div>
                        }
    
                    </div>
                </div>
            </div>
        )
    }
}
export default Pokemon;