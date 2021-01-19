import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({allPokemon}) {

  
  let pokemonObj = allPokemon.map((pmon) => {
    return <PokemonCard 
      key= {pmon.id}
      pokemon = {pmon}
    
    />
  })




  return (
    <Card.Group itemsPerRow={6}>
      {pokemonObj}
      
    </Card.Group>
  );
}

export default PokemonCollection;
