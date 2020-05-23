import React , {Component} from 'react';
import './App.css';
import Hamburger from '../containers/Hamburger/Hamburger'



class App extends Component
{
  render()
  {
    return(
      <div className="App">
        <h1>Application hamburger</h1>
        <Hamburger/>
      </div>
    )
  }
}

export default App;

/*
  en gros au niveau du hamburger 
  -> me faut une liste des ingrédient avec un + et un - (et mettre le compte pour chacun) 
  -> me faut un prix unitaire pour chacun 
  -> me faut le prix total 
  -> au niveau de la construction du hamburger va etre un peu plus tricky 
*/