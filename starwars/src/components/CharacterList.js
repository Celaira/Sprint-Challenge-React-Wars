import React from 'react';
import Character from './Character';

const CharacterList = (props) => {
return (
  <div>
    {props.Characters.map(char => (
        <Character key={char.created} Character={char} />
      ))};
  </div>);
}

export default CharacterList;
