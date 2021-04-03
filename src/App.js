
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from "./component/Header";
import Recipe from "./component/Recipe";
import Axios from 'axios';


const App = () => {
  let [search, setSearch] = useState("chicken");
  let [recipes, setRecipe] = useState([]);
  const APP_ID = "f441ea7c";
  const APP_KEY = "073c7334625d2888830f2f9877a2f01f";
  const onInputChange = (e) => {

    setSearch(search = e.target.value);
  }
  useEffect(() => {
    getRecipes();
  },[]);
  const getRecipes=async()=>{
    const result = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    console.log(result);
    setRecipe(result.data.hits)
  }
  const onSearchClick=()=>{
getRecipes();
  }

  return (
    <div className="App">
      <Header search={search} onInputChange={onInputChange} onSearchClick={onSearchClick}></Header>
      <div className="container">

      <Recipe recipes={recipes}></Recipe>
      </div>
    </div>
  );
}

export default App;
