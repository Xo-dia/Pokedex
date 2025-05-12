import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PokemonsList from './pages/pokemon-list';
import PokemonsDetail from './pages/pokemon-details';
import PokemonEdit from './pages/pokemon-edit';
import PokemonAdd from './pages/pokemon-add';
import PageNotFound from './pages/page-not-found';
import Login from './pages/login';
import PrivateRoute from './PrivateRoute';
 
const App: FunctionComponent = () => {
 
  return (
    <Router>
      <div>
      <nav> 
        <div className="nav-wrapper teal">
          <Link to="/" className="brand-logo center">Pokédex</Link>
        </div> 
      </nav>
      <Switch>
        <PrivateRoute exact path="/" component={PokemonsList} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/pokemons" component={PokemonsList} />
        <PrivateRoute exact path="/pokemon/add" component={PokemonAdd} />
        <PrivateRoute exact path="/pokemons/edit/:id" component={PokemonEdit} />
        <PrivateRoute path="/pokemons/:id" component={PokemonsDetail} />
        <Route component={PageNotFound} />
      </Switch>
      </div>
    </Router>
  );
}
 
export default App;




















// const App: FunctionComponent = () => { 
//     const [pokemons, setPokemons] = useState<Pokemon[]>([]);

//     useEffect(() => {
//         setPokemons(POKEMONS);
//     }, []);

//     return (
//     <div>
//         <h1>Pokédex</h1>
//         <p>Il y a {pokemons.length} pokémons dans le pokedex</p>
//     </div>
//     )
//     }

//     export default App;


// const App: FunctionComponent = () => { 
//     const [pokemons] = useState<Pokemon[]>(POKEMONS);

//      return (
//       <div>
//         <h1>Pokédex</h1>
//         <p>Il y a {pokemons.length} pokémons dans le pokedex</p>
//       </div>
//      )
    
//     }
      
//     export default App;


// const App: FunctionComponent = () => { // typé App en React.FC (function component) = composant que l'on peut ecrir sous la forme d'une fonction
// //  const name: String = 'React';
// const [name, setName] = useState<String>('React');
// /* var nameStateVariable = useState('React');
//     var name = nameStateVarible[0];
//     var steName = nameStateVariable[1]; */
//  return (
//   <h1>Bonjour, {name} !</h1>
//  )

//  const [Pokemon, setName] = useState<>()

// }
  
// export default App;


/*import React from 'react';
  
const App: React.FC = () => {
 const name: String = 'React';
    
 return (
  <h1>Hello, {name} !</h1>
 )
}
  
export default App;*/


/* import React from 'react';

 export default class App extends React.Component {
    const name: string = "React";

    render() {
        return <h1> Hello, {name}<h1>;
    }
 }
 */