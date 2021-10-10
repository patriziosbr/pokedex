import { Component } from "react";
import axios from "axios";
import {Link} from "react-router-dom";


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
            <div key={index} className="btn-default btn-000 chip">
              {ele.type.name}
            </div>
          )}
          </div>
        }
    
    render() {
        const {pokeData } = this.state;
        console.log( pokeData);
        return (
            <div>
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
                        <div className="type-chips">
                        {
                            this.state.init ? <div>{this.renderTypes()}</div> : <div>Loader singolo da fare</div>
                        }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Pokemon;