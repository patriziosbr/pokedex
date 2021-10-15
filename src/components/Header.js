// import {Link} from "react-router-dom";
import logo from "../assets/logo.png";
import {Link} from 'react-router-dom';
import { useLocation } from "react-router-dom";



const Header = ()=>{
    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    return(
        <header>
            {/* <Link to="/pokemons">All Pokemons</Link> */}
            <div className="top-menu">
                <div>
                    <Link className="logo-home" to="/">
                        <img src={logo} alt="home" />
                    </Link>
                </div>
                <div className="desk-nav">
                    <Link className={splitLocation[1] === "pokemons" ? "active btn-default btn-fff" : "btn-default btn-fff"} to="/pokemons">
                        <i className="fas fa-border-all"></i>
                        <small>Pokedex</small>
                    </Link>
                    <Link className={splitLocation[1] === "catched" ? "active btn-default btn-fff" : "btn-default btn-fff"} to="/catched">
                        <i className="fas fa-praying-hands"></i>
                        <small>Catched</small>
                    </Link>
                    <Link className={splitLocation[1] === "tocatch" ? "active btn-default btn-fff" : "btn-default btn-fff"} to="/tocatch">
                        <i className="fas fa-hands"></i>
                        <small>To Catch</small>
                    </Link>
                </div>
            </div> {/* close top menu */}

            {/* start bottom menu */}
            <nav className="bottom-navBar">
                <Link className={splitLocation[1] === "" ? "active" : ""} to="/">
                    <i className="fas fa-home"></i>
                   <small>home</small>
                </Link>
                <Link className={splitLocation[1] === "pokemons" ? "active" : ""}  to="/pokemons">
                    <i className="fas fa-border-all"></i>
                   <small>Pokedex</small>
                </Link>
                <Link className={splitLocation[1] === "catched" ? "active" : ""} to="/catched">
                    <i className="fas fa-praying-hands"></i>
                   <small>Catched</small>
                </Link>
                <Link className={splitLocation[1] === "tocatch" ? "active" : ""} to="/tocatch">
                    <i className="fas fa-hands"></i>
                   <small>To Catch</small>
                </Link>
            </nav>
        </header>
    )
}
export default Header;