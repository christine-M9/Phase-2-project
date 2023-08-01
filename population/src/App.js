import React, { useState } from 'react';
import PopulationData from './PopulationData';
import PopulationArmy from './PopulationArmy';

const App = () => {
  const [enlistedPopulation, setEnlistedPopulation] = useState([]);

  const handleEnlist = (populationBot) => {
    // Checking if the population bot is not already enlisted
    if (!enlistedPopulation.find((bot) => bot["ID Year"] === populationBot["ID Year"])) {
      setEnlistedPopulation((prevEnlisted) => [...prevEnlisted, populationBot]);
    }
  };

  return (
    <div>
      <h1>POPULATION DATA</h1>
      <PopulationData onEnlist={handleEnlist} />
      <PopulationArmy enlistedPopulation={enlistedPopulation} />
    </div>
  );
};

export default App;
