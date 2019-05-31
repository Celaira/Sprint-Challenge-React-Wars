import React, { Component } from 'react';
import CharacterList from './components/CharacterList';

import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      current: 1
    };
  }

  nextPage = () => {
    this.getCharacters(`https://swapi.co/api/people/?page=${ this.state.current }`);
    this.setState(PrevState => ({
      current: PrevState.current + 1
    }));
  }

  prevPage = () => {
    this.getCharacters(`https://swapi.co/api/people/?page=${this.state.current }`);
    this.setState(PrevState => ({
      current: PrevState.current - 1
    }));
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };



  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>

        <CharacterList Characters={this.state.starwarsChars} />

        <div className="pageButtons">
          <button onClick={this.prevPage}>Previous</button> || <button onClick={this.nextPage}>Next</button>
        </div>
      </div>

    );
  }
}

export default App;
