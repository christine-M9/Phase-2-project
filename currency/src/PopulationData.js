import React, { useEffect, useState } from 'react';

const PopulationData = () => {
  const [populationData, setPopulationData] = useState([]);

  useEffect(() => {
    fetchPopulationData();
  }, []);

  const fetchPopulationData = () => {
    fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
      .then((response) => {
       
        return response.json();
      })
      .then((data) => {
        // lets assume the data is an object with a "data" property containing the array of population data
        if (data && data.data) {
          setPopulationData(data.data);
        }
      })
     
  };
// Use of bracket notation 
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
        </div>
      ))}
    </div>
  );
};

export default PopulationData;
