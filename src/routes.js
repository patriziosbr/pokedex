import { Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Pokemons from './components/Pokemons';
import Pokemon from './components/Pokemon';
import Catched from './components/Catched';



const Main = ()=>{
    return(
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/pokemons" component={Pokemons} />
                <Route  path="/pokemon/:name" component={Pokemon} />
                <Route  path="/catched" component={Catched} />
            </Switch>
        </div>
    )
}
export default Main;