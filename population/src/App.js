import React, { useState } from 'react';
import PopulationDataSearch from './PopulationDataSearch';
import PopulationArmy from './PopulationArmy';
import AddNewPopulation from './AddNewPopulation';

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
  );
};

export default App;
