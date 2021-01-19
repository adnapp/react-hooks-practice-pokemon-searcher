import React, {useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

const API = "http://localhost:3001/pokemon"

function PokemonPage() {

  const [allPokemon, setAllPokemon] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch(API)
    .then(response => response.json())
    .then(data => setAllPokemon(data))
  },[]) 


  function handleSearch(term){
    setSearchTerm(term)
  }

  function addPokemon(newPmon){
    setAllPokemon([...allPokemon, newPmon])
  }


  const searchedPokemon = allPokemon.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  })


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon={addPokemon}/>
      <br />
      <Search handleSearch={handleSearch} searchTerm={searchTerm}/>
      <br />
      <PokemonCollection allPokemon={searchedPokemon}/>
    </Container>
  );
}

export default PokemonPage;
