import React, { useState } from 'react'
import Header from './Components/Header';
import Main from './Components/Main';
import '../src/css/style.css'
import Context from './Components/Context';
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  const [cart , setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])
  const [searchValue, setSearchValue] = useState('')
  const [filter, setFilter] = useState(false);
  const [filterStatus, setFilterStatus] = useState('default')

  return (
    <Router>  
    <Context.Provider value = {{cart, setCart, searchValue,setSearchValue, filter, setFilter, filterStatus, setFilterStatus}}>
    <div className="App">
      <Header />
      <Main />      
    </div>
    </Context.Provider>
    </Router>  
  );
}

export default App;
