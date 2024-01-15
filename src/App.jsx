import React, { useState } from "react";
import "./App.css";
import { characters } from "./MarvelData";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCharacters = characters.filter((character) =>
    character.alias.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mainBody">
      <div className="topHeader">
        <h1 className="header">JUSTICE LEAGUE</h1>
        <input
          placeholder="Search a Marvel Character"
          className="topInput"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="cardBody">
        {filteredCharacters.map((data, index) => (
          <div key={index} className="card">
            <div className="main">
              <img
                className="avatarImage"
                src={data.img1}
                alt={data.alias}
              />
              <h2>{data.alias}</h2>
              <p className="description">
                {data?.abilities[0]}
                <br />
                {data?.abilities[1]}
                <br />
                {data?.abilities[2]}
              </p>
              <div className="avatarInfo">
                <div className="price">
                  <ins>◘</ins>
                  <p>{data.team}</p>
                </div>
                <div className="duration">
                  <ins>◷</ins>
                  <p>Home: {data.homeworld}</p>
                </div>
              </div>
              <hr />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
