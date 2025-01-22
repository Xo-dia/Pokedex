import React, {FunctionComponent} from 'react';
import PokemonList from './page/pokemon-list';

const App: FunctionComponent = () => { 


    return (
    <PokemonList/>
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