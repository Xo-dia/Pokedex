import React, {FunctionComponent} from 'react';
import PokemonList from './page/pokemon-list';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PokemonsDetail from './page/pokemon-details';
import PageNotFound from './page/page-not-found';

const App: FunctionComponent = () => { 


    return (
    <Router>
        <div>
            {/* La barre de navigation commune à toutes les pages */}
            <nav>
                <div className='nav-wrapper teal '>
                    <Link to="/" className="brand-logo center">Pokédex</Link>
                </div>
            </nav>
            {/* Le système de gastion des routes de notre application */}
            <Switch>
                <Route exact path="/" component={PokemonList} />
                <Route exact path="/pokemons" component={PokemonList} />
                <Route exact path="/Pokemons/:id" component={PokemonsDetail} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    </Router>
    )
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