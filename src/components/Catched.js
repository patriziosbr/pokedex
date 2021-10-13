import { Component } from "react";
import axios from "axios";
import PokemonCatch from './PokemonCatch';
import Loader from "./Loading";


class Catched extends Component {
    state= {
        catched: [],
        loading: false,
        catchedFromAll: [],
        finalArr : []
    }
    async componentDidMount () {
        this.setState({loading : true});
        await Promise.all
        ([
            axios.get('http://localhost:8000/catched/'),
            axios.get('http://localhost:8000/catchFromAll/'),
        ]).then(([res, catchFromAll]) => {
            this.setState({ catched : res.data, catchedFromAll : catchFromAll.data, loading : false,
            })
        }).catch(err => {
            console.log('2 promise in catched err', err);
        });

        this.unionBy(this.state.catched, this.state.catchedFromAll, x => x.name);

    }

    unionBy = (a, b, fn) => {
        const s = new Set(a.map(fn));
        let cleanPokemon = Array.from(new Set([...a, ...b.filter(x => !s.has(fn(x)))]));
        console.log(cleanPokemon);
        this.setState({finalArr : cleanPokemon})
      };
    // async componentDidMount () {
    //     this.setState({loading : true})
    //     await axios.get("http://localhost:8000/catched")
    //     .then( res => {
    //         // console.log(res.data); //all catched
    //     this.setState({catched : res.data, loading : false })       
    //     }).catch( err => {
    //         console.log('axios error', err);
    //     })
    // }
    render(){
        const {loading } = this.state;
        return(
            <div className="bg-poke">
                <div className="w-80">
                    <h1 className="title text-black" >All Pokemons Catched</h1>
                    {
                        loading  ? <Loader /> : <PokemonCatch pokemons={this.state.finalArr} />
                    }
                    {/* {
                        loading  ? <Loader /> : <PokemonCatch pokemons={this.state.catched} pokeFromAll={this.state.catchedFromAll}/>
                    } */}
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
export default Catched;