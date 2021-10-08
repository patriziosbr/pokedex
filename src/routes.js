import { Route, Switch } from "react-router-dom";
import Home from './components/Home';


const Main = ()=>{
    return(
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                {/* <Route path="/pokemons" component={Pokemons} /> */}
                {/* <Route  path="/pokemon/:id" component={SinglePkemon} /> */}
            </Switch>
        </div>
    )
}
export default Main;