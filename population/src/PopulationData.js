import React, { useEffect, useState } from 'react';

const PopulationData = ({ onEnlist }) => {
  const [populationData, setPopulationData] = useState([]);

  useEffect(() => {
    fetchPopulationData();
  }, []);
// GET request
  const fetchPopulationData = () => {
    fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
      .then((response) => response.json())
      .then((data) => {
        if (data && data.data) {
          setPopulationData(data.data);
        }
      })
      .catch((apiError) => {
        console.error("Failed to fetch data from the API:", apiError);
        // Fetch from the JSON server if API request fails
        fetch('/population.json') 
          .then((response) => response.json())
          .then((data) => {
            if (data && data.populationData) {
              setPopulationData(data.populationData);
            }
          })
          .catch((jsonError) => {
            console.error("Failed to fetch data from the JSON server:", jsonError);
          });
      });
  };

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
// eporting
export default PopulationData;
