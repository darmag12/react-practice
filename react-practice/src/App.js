import React, { useState, useEffect } from 'react';
import { data } from './dummyData'
import NameList from './components/NameList/NameList'
import Search from './components/Search/Search'
import NameForm from './components/NameForm/NameForm';
import './App.css';



const App = () => {
  const [name, setName ] = useState(data);

  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    let results = name.filter(n => (
      n.toLowerCase().includes(searchTerm.toLowerCase())
    ))
      setSearchResults(results);
      
  }, [searchTerm])


  const changeHandler = (e) => {
    setSearchTerm(e.target.value)
  }

  const addName = (newName) => {
    setSearchResults([...searchResults, newName])
  }

    return (
      <div className="App">
        <Search changeHandler={changeHandler} searchTerm={searchTerm}/>
        <NameForm addName={addName}/>
        <NameList names={searchResults}/>
      </div>
    );
  
}

export default App;
