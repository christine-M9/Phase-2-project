import React from 'react';

// functional component
const PopulationArmy = ({ enlistedPopulation, onRelease }) => {

  return (
    <div>
      <h2>POPULATION ARMY</h2> 
      {/* itterating through the array(enListed population) */}
      {enlistedPopulation.map((item) => (
        <div key={item["ID Year"]}>
          <h3>ID Year: {item["ID Year"]}</h3>
          <p>ID Nation: {item["ID Nation"]}</p>
          <p>Nation: {item.Nation}</p>
          <p>Year: {item.Year}</p>
          <p>Population: {item.Population}</p>
          <p>Slug Nation: {item["Slug Nation"]}</p>
          <button onClick={() => onRelease(item)}>Release</button>
        </div>
      ))}
    </div>
  );
};
// exporting
export default PopulationArmy;
