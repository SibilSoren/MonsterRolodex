import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { InputBox } from "./components/input-box/input-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => this.setState({ monsters: user }));
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonster = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return this.state.monsters.length === 0 ? (
      <h2> Loading Monsters ... </h2>
    ) : (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <InputBox onSearchChange={this.onSearchChange} />
        <CardList monsters={filteredMonster}></CardList>
      </div>
    );
  }
}

export default App;
