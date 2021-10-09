import {Link} from "react-router-dom";

const PolemonCard = (props) => {
    console.log(props);
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
                                <p>Captured toggle</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default PolemonCard;