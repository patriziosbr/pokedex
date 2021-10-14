import { Component } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import SingleLoader from "./SingleLoader";

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
            init: 0,
            postPoke : '',
            catchedArr : [],
            catchedFromAll : [],
        }
    }
    componentDidMount () {
        Promise.all
        ([
            axios.get(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.name}`),
            axios.get('http://localhost:8000/catched/'),
            axios.get('http://localhost:8000/catchFromAll/'),
        ]).then(([res, getCatched, catchFromAll]) => {
            this.setState({pokeData : res.data, catchedArr : getCatched.data, catchedFromAll : catchFromAll.data, loading : false, 
                init: 1
            })
        });
        this.unionBy(this.state.catchedArr, this.state.catchedFromAll, x => x.name);
    }
    unionBy = (a, b, fn) => {
        const s = new Set(a.map(fn));
        let cleanPokemon = Array.from(new Set([...a, ...b.filter(x => !s.has(fn(x)))]));
        console.log(cleanPokemon);
        this.setState({uniqueArrDett : cleanPokemon})
      };

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
        catchPokemon() {
            // console.log(this.state.pokeData); //the pokemon
            let postPoke = this.state.pokeData;
            axios.post('http://localhost:8000/catched/', postPoke)
            .then( res => {
                console.log('res axios senno è triste', res.data); //the pokemon
            }).catch( err => {
                console.log('axios error Post', err);
                //alert in extremis
            })
        }
    render() {
        const {pokeData, catchedArr, loading, catchedFromAll } = this.state;
        // console.log( pokeData); //array filled
        // console.log( pokeData.name);
        // console.log( catchedArr);
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
                        !loading &&
                        <form className="form-catch" >
                            <button className={ 
                                catchedArr.find( x => x.name === pokeData.name ) ? 'btn-default btn-000 mb-5 btn-catched'
                                :  catchedFromAll.find( x => x.name === pokeData.name ) ? 'btn-default btn-000 mb-5 btn-catched'
                                : 'btn-default btn-000 mb-5 btn-catch'} onClick={() => {this.catchPokemon() }} type="submit" disabled={ catchedArr.find( x => x.name === pokeData.name )}>
                                { catchedArr.find( x => x.name === pokeData.name ) ? 'CATCHED' 
                                :  catchedFromAll.find( x => x.name === pokeData.name ) ? 'CATCHED'
                                : 'CATCH'}</button>
                        </form>

                            
                        }
                        <div className="type-chips">
                        {
                            this.state.init ?
                            <div>
                                <h4>Type: </h4>
                                {this.renderTypes()}
                            </div> : <SingleLoader />
                        }
    
                        </div>{/* close typechips */}
                        {
                            !loading 
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