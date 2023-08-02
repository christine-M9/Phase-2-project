import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import PopulationData from './PopulationData';
import PopulationDataSearch from './PopulationDataSearch';
import AddNewPopulation from './AddNewPopulation';
import PopulationArmy from './PopulationArmy';

const App = () => {
  const [enlistedPopulation, setEnlistedPopulation] = useState([]);
  const [newlyAddedPopulation, setNewlyAddedPopulation] = useState([]);

  const handleEnlist = (populationBot) => {
    if (!enlistedPopulation.find((bot) => bot["ID Year"] === populationBot["ID Year"])) {
      setEnlistedPopulation((prevEnlisted) => [...prevEnlisted, populationBot]);
    }
  };

  const handleRelease = (populationBot) => {
    setEnlistedPopulation((prevEnlisted) =>
      prevEnlisted.filter((bot) => bot["ID Year"] !== populationBot["ID Year"])
    );
  };

  const handleAddPopulation = (newPopulationData) => {
    // set when the server returns the newly added data with an ID
    setNewlyAddedPopulation((prevNewlyAdded) => [...prevNewlyAdded, newPopulationData]);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/data">Population Data</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<h1>WELCOME TO C.J'S POPULATION APP.</h1>} />
          <Route
            path="/data"
            element={
              <div>
                <h1>POPULATION DATA</h1>
                <AddNewPopulation onAddPopulation={handleAddPopulation} />
                <h2>ADDED POPULATION</h2>
                {newlyAddedPopulation.map((item, index) => (
                  <div key={index}>
                    <h3>ID Year: {item["ID Year"]}</h3>
                    <p>ID Nation: {item["ID Nation"]}</p>
                    <p>Nation: {item.Nation}</p>
                    <p>Year: {item.Year}</p>
                    <p>Population: {item.Population}</p>
                    <p>Slug Nation: {item["Slug Nation"]}</p>
                  </div>
                ))}
                <PopulationDataSearch onEnlist={handleEnlist} />
                <PopulationArmy enlistedPopulation={enlistedPopulation} onRelease={handleRelease} />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
