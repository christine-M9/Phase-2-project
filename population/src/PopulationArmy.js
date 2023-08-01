import React from 'react';

const PopulationArmy = ({ enlistedPopulation }) => {
  return (
    <div>
      <h2>POPULATION ARMY</h2>
      {enlistedPopulation.map((item) => (
        <div key={item["ID Year"]}>
          <h3>ID Year: {item["ID Year"]}</h3>
          <p>ID Nation: {item["ID Nation"]}</p>
          <p>Nation: {item.Nation}</p>
          <p>Year: {item.Year}</p>
          <p>Population: {item.Population}</p>
          <p>Slug Nation: {item["Slug Nation"]}</p>
        </div>
      ))}
    </div>
  );
};

export default PopulationArmy;
