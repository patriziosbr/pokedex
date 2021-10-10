import {Link} from "react-router-dom";


const PokemonCard = (props) => {
    // console.log(props);

    return(
            <div>
                <div  className="card-box">
                    {props.pokemons.map((pokemon, key) => {
                        return (
                            <div className="card" key={key}>
                                <Link
                                to={{
                                    pathname: `pokemon/${pokemon.name}`
                                }}>
                                    <div className="img-card">
                                        <img src={`https://img.pokemondb.net/artwork/vector/large/${pokemon.name}.png`} alt={pokemon.name}/>
                                    </div>
                                </Link>
                                <div className="bottom">
                                    <h4 className="text-black">{pokemon.name}</h4>
                                    <form>
                                        <div className="create-visible switch-field ">
{/* 
                                            <input 
                                                type="radio"
                                                value="si"
                                                checked={captured === "si"}
                                                onChange={handleChange}
                                                id="visible-si"
                                                className="form-check-input"  
                                            />
                                            <label  className="form-check-label not-strong yes " htmlFor="visible-si" onChange={handleChange}>Si</label>

                                            <input 
                                                type="radio"
                                                value="no" 
                                                checked={captured === "no"}
                                                onChange={handleChange}
                                                id="visible-no" 
                                                className="form-check-input"
                                            />
                                            <label  className="form-check-label not-strong no " htmlFor="visible-no" onChange={handleChange} >No</label> */}


                                        </div> 
                                    </form>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }


export default PokemonCard;