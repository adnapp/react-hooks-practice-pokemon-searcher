import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({addPokemon}) {

  const [formData, setFormData] = useState({
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: ""
      })


  function handleChange(event){
    setFormData({
      ...formData, [event.target.name]: event.target.value
    })
  }

  function handleSubmit(event){
    event.preventDefault();
    // console.log(formData)
    // addPokemon(formData)

     fetch(`http://localhost:3001/pokemon`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        hp: formData.hp,
        sprites: {front: formData.frontUrl, back:formData.backUrl}
      }),
    })
    .then(response => response.json())
    .then(data => {
      addPokemon(data);
    })

    setFormData({
      name: "",
      hp: "",
      frontUrl: "",
      backUrl: ""
        })

  }
  

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => {
          handleSubmit(e)
        }}
      >
        <Form.Group widths="equal">
          <Form.Input 
            fluid 
            label="Name" 
            placeholder="Name" 
            name="name" 
            onChange={handleChange}
            value={formData.name}
          />
          <Form.Input 
            fluid 
            label="hp" 
            placeholder="hp" 
            name="hp" 
            onChange={handleChange}
            value={formData.hp}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleChange}
            value={formData.frontUrl}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleChange}
            value={formData.backUrl}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
