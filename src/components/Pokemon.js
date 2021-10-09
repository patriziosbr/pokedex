import { Component } from "react";
import axios from "axios";

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
        return <ul>
        {this.state.pokeData.types.map((ele, index) =>
            <li key={index}>
              {ele.type.name}
            </li>
          )}
          </ul>
        }
    
    render() {
        const {pokeData } = this.state;
        console.log('grr', pokeData);
        return (
            <div>
                <div className="w-80 pokemon-box">
                    <div className="singlePoke">

                        <h1>{pokeData.name}</h1>
                        <ul>
                            <li><strong>Next level: </strong>{pokeData.base_experience}</li>
                        </ul>
                        <div>
                            {
                               this.state.init ? <div>{this.renderTypes()}</div> : <div>Loading...</div> 
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Pokemon;