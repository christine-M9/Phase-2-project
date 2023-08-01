import React, { useEffect, useState } from 'react';

// function component
const PopulationData = ({ onEnlist }) => {
  const [populationData, setPopulationData] = useState([]);

  useEffect(() => {
    fetchPopulationData();
  }, []);
// GET request from API
  const fetchPopulationData = () => {
    fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
      .then((response) => response.json())
      .then((data) => {

 // Assuming the data is an object with a "data" property containing the array of population data
        if (data && data.data) {
          setPopulationData(data.data);
        }
      });
  };
// JSX
  return (
    <div>
      {populationData.map((item) => (
        <div key={item["ID Year"]}>
          <h3>ID Year: {item["ID Year"]}</h3>
          <p>ID Nation: {item["ID Nation"]}</p>
          <p>Nation: {item.Nation}</p>
          <p>Year: {item.Year}</p>
          <p>Population: {item.Population}</p>
          <p>Slug Nation: {item["Slug Nation"]}</p>
          <button onClick={() => onEnlist(item)}>Enlist</button>
        </div>
      ))}
    </div>
  );
};

export default PopulationData;
