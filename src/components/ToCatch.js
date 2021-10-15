import { Component } from "react";
import axios from "axios";
import PokemonToCatch from './PokemonToCatch';
import Loader from "./Loading";


class ToCatch extends Component {
    state= {
        catched: [],
        // loading: false,
        catchedFromAll: [],
        finalArr : [],
        getAll : [],
        filtredToCatch: []
    }
    async componentDidMount () {
        this.setState({loading : true});
        await Promise.all
        ([
            axios.get('http://localhost:8000/catched/'),
            axios.get('http://localhost:8000/catchFromAll/'),
            axios.get("https://pokeapi.co/api/v2/pokemon"),
        ]).then(([res, catchFromAll, getAllApi]) => {
            this.setState({ catched : res.data, catchedFromAll : catchFromAll.data, getAll: getAllApi.data.results , loading : false,
            })
        }).catch(err => {
            console.log('3 promise in to catch err', err);
        });
        this.unionBy(this.state.catched, this.state.catchedFromAll, x => x.name);
        this.getToCatch(this.state.finalArr, this.state.getAll);
    }
    // sum 2 arr remove duplicates and keep all
    unionBy = (a, b, fn) => {
        const s = new Set(a.map(fn));
        let cleanPokemon = Array.from(new Set([...a, ...b.filter(x => !s.has(fn(x)))]));
        this.setState({finalArr : cleanPokemon})
      };
    // sum 2 remove duplicates keep the rest
    getToCatch = (a, b) => {
        for (var i = 0, len = a.length; i < len; i++) { 
            for (var j = 0, len2 = b.length; j < len2; j++) { 
                if (a[i].name === b[j].name) {
                    b.splice(j, 1);
                    len2=b.length;
                }
            }
            this.setState({filtredToCatch : b})
        }
      };

    render(){
        const {loading } = this.state;
        return(
            <div className="bg-poke">
                <div className="w-80">
                    <h1 className="title text-black" >All Pokemons to Catch</h1>
                    {
                        loading  ? <Loader /> : <PokemonToCatch pokemons={this.state.filtredToCatch} allPoke={this.state.getAll}/>
                    }
                </div>
            </div>
        )
    }
}
export default ToCatch;