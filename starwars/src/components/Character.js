import React from 'react';

const Character = (props) => {
return (
  <div className="character-wrapper">
  <header className="charHead">{props.Character.name}</header>
  <div className="charCard">
  <p>Number of Films: {props.Character.films.length}</p>
  <p>Homeworld: {props.Character.homeworld}</p>
  </div>
  </div>
);

}

export default Character;
