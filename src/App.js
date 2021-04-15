import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from'./components/ItemListContainer/ItemListContainer';
function App() {

  return (
    <div className="App">
      
      <header>
        <NavBar/>
      </header>
      <ItemListContainer id="ItemListContainer" greeting= 'Buen día!' /> 
     </div>  
  );
}

export default App;
