import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from'./components/ItemListContainer/ItemListContainer';
<link href="/your-path-to-uicons/css/uicons-regular-rounded.css" rel="stylesheet"></link>
function App() {

  return (
    <div className="App">
      
      <header>
        <NavBar/>
      </header>
      <div className="ItemListContainer">
      <ItemListContainer greeting= 'Buen día!' />    
      </div>
     </div>  
  );
}

export default App;
