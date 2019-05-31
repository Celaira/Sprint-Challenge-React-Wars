import React from 'react';
import './StarWars.css'

const Character = (props) => {
return (
  <div className="character-wrapper">
  <header className="charHead">{props.Character.name}</header>
  <div className="charCard">
  <p>Number of Films: {props.Character.films.length}</p>
  <p>Homeworld: <a href={props.Character.homeworld}>{props.Character.homeworld}</a></p>
  </div>
  </div>
);

}

export default Character;
