import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
const {name, hp, sprites} = pokemon;
const [clicked, setClicked] = useState(false)


  return (
    <Card>
      <div onClick={() => setClicked(!clicked)}>
        <div className="image">
          <img src={clicked ? sprites.back : sprites.front} alt={name}/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
