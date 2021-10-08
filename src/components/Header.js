import {Link} from "react-router-dom";
import logo from "../assets/logo.png"

const Header = ()=>{
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
                    <Link className="btn-default" to="/pokemons">
                        <i className="fas fa-border-all"></i>
                        <small>Pokedex</small>
                    </Link>
                    <Link className="btn-default" to="/">
                        <i className="fas fa-praying-hands"></i>
                        <small>Catched</small>
                    </Link>
                    <Link className="btn-default" to="/">
                        <i className="fas fa-hands"></i>
                        <small>To Catch</small>
                    </Link>
                </div>
            </div> {/* close top menu */}

            {/* start bottom menu */}
            <nav className="bottom-navBar">
                <Link to="/">
                    <i className="fas fa-home"></i>
                   <small>home</small>
                </Link>
                <Link to="/pokemon">
                    <i className="fas fa-border-all"></i>
                   <small>Pokedex</small>
                </Link>
                <Link to="/">
                    <i className="fas fa-praying-hands"></i>
                   <small>Catched</small>
                </Link>
                <Link to="/">
                    <i className="fas fa-hands"></i>
                   <small>To Catch</small>
                </Link>
            </nav>
        </header>
    )
}
export default Header;