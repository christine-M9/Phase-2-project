import React, { useState } from 'react';
import PopulationDataSearch from './PopulationDataSearch';
import PopulationArmy from './PopulationArmy';
// state management
const App = () => {
  const [enlistedPopulation, setEnlistedPopulation] = useState([]);
// handle enList function
  const handleEnlist = (populationBot) => {
    if (!enlistedPopulation.find((bot) => bot["ID Year"] === populationBot["ID Year"])) {
      setEnlistedPopulation((prevEnlisted) => [...prevEnlisted, populationBot]);
    }
  };
// handle release function
  const handleRelease = (populationBot) => {
    setEnlistedPopulation((prevEnlisted) =>
      prevEnlisted.filter((bot) => bot["ID Year"] !== populationBot["ID Year"])
    );
  };
// Rendering the UI(JSX)
  return (
    <div>
      <h1>POPULATION DATA</h1>
      <PopulationDataSearch onEnlist={handleEnlist} />
      <PopulationArmy enlistedPopulation={enlistedPopulation} onRelease={handleRelease} />
    </div>
  );
};
// exporting
export default App;
