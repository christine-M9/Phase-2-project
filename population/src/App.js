import React, { useState } from 'react';
import PopulationDataSearch from './PopulationDataSearch';
import PopulationArmy from './PopulationArmy';

const App = () => {
  const [enlistedPopulation, setEnlistedPopulation] = useState([]);

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

  return (
    <div>
      <h1>POPULATION DATA</h1>
      <PopulationDataSearch onEnlist={handleEnlist} />
      <PopulationArmy enlistedPopulation={enlistedPopulation} onRelease={handleRelease} />
    </div>
  );
};

export default App;
