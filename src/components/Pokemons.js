import { Component } from "react";
import axios from "axios";
import PokemonCard from './PokemonCard';
import Loader from "./Loading";


class Pokemons extends Component {
    state= {
        pokemons: [],
        loading: false,
        // defineCatched: [],
        catchedFromAll: [],
        catchedDeatil: []
    }
    async componentDidMount () {
        this.setState({loading : true});
        await Promise.all
        ([
            axios.get("https://pokeapi.co/api/v2/pokemon"),
            axios.get('http://localhost:8000/catchFromAll/'),
            axios.get('http://localhost:8000/catched/'),
        ]).then(([resAll, catchFromAll , getCatched]) => {
            this.setState({ pokemons : resAll.data.results, catchedFromAll : catchFromAll.data, catchedDeatil : getCatched.data, loading : false,
            })
        }).catch(err => {
            console.log('3 promise in pokemons err', err);
        })
    }
    render(){

        const { loading, catchedFromAll, catchedDeatil } = this.state;
        // console.log(catchedFromAll);
        // console.log(catchedDeatil);

        return(
            <div className="bg-poke">
                <div className="w-80">
                    <h1 className="title text-black" >All Pokemons</h1>
                    {
                        loading  ? <Loader /> : <PokemonCard pokemons={this.state.pokemons} catchFromAllTest={catchedFromAll} catchedDeatilTest={catchedDeatil}  />
                    }
                    {/* {
                        loading && <Loader /> 
                    }
                    {
                        <PokemonCard pokemons={this.state.pokemons} />
                    } */}
                </div>
            </div>
        )
    }
}
export default Pokemons;
