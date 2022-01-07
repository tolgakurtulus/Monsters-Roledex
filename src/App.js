import React, { useState, useEffect } from "react";
import { CardList } from "./components/card-list/card-list";
import { SearchBox } from "./components/search-box/search-box.jsx";
import "./App.css";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((users) => setMonsters(users))
    );
  }, []);

  const filteredMonters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Monster Pokedex</h1>
      <SearchBox
        placeholder="Search Monter"
        handleChange={
          (e) => setSearchField(e.target.value)
          // e => this.setState({ searchField: e.target.value }),
          // () => console.log(this.state)
        }
      />
      <CardList monsters={filteredMonters} />
    </div>
  );
}

export default App;
