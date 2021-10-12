import { Component } from "react";
import axios from "axios";
import PokemonCard from './PokemonCard';
import Loader from "./Loading";


class Catched extends Component {
    state= {
        catched: [],
        loading: false,
    }
    async componentDidMount () {
        this.setState({loading : true})
        await axios.get("http://localhost:8000/catched")
        .then( res => {
            // console.log(res.data); //all catched
        this.setState({catched : res.data, loading : false })       
        }).catch( err => {
            console.log('axios error', err);
        })
    }
    render(){
        const {loading} = this.state;
        return(
            <div className="bg-poke">
                <div className="w-80">
                    <h1 className="title text-black" >All Pokemons</h1>
                    {
                        loading  ? <Loader /> : <PokemonCard pokemons={this.state.catched} />
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
export default Catched;