import React, {FunctionComponent} from 'react';
  
const App: FunctionComponent = () => { // typé App en React.FC (function component) = composant quel l'on peut ecrir sous la forme d'un fonction
 const name: String = 'React';
    
 return (
  <h1>Hello, {name} !</h1>
 )
}
  
export default App;