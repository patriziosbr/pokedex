import {Link} from "react-router-dom";

function Home(){
    return(
        <div className="bg-red">
            <div className="bg-home">
                <div className="desk-60">
                    <h1 className="text-black">Welcome</h1>
                    <h2 className="text-black">To myPokedex</h2>
                    <Link className="btn-default btn-fff w-50" to="/pokemons" >START</Link>
                </div>
            </div>
        </div>
    )
};
export default Home;