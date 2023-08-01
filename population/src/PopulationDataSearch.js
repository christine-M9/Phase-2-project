import React, { useEffect, useState } from 'react';

// function component
const PopulationDataSearch = ({ onEnlist }) => {
  const [populationData, setPopulationData] = useState([]);
  const [searchYear, setSearchYear] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchPopulationData();
  }, []);
// GET request{data fetching from API}
  const fetchPopulationData = () => {
    fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
      .then((response) => response.json())
      .then((data) => {
        if (data && data.data) {
          setPopulationData(data.data);
          setFilteredData(data.data);
        }
      });
  };
// Filtering Data Based on Search Year:
  useEffect(() => {
    const filteredResults = populationData.filter(
      (item) => item.Year.toString() === searchYear
    );
    setFilteredData(searchYear === '' ? populationData : filteredResults);
  }, [searchYear, populationData]);
// Returns JSX(Rendering the user interface)
  return (
    <div>
      <input
        type="text"
        placeholder="Search data by Year"
        value={searchYear}
        onChange={(e) => setSearchYear(e.target.value)}
      />
      {filteredData.map((item) => (
        <div key={item["ID Year"]}>
          <h3>ID Year: {item["ID Year"]}</h3>
          <p>ID Nation: {item["ID Nation"]}</p>
          <p>Nation: {item.Nation}</p>
          <p>Year: {item.Year}</p>
          <p>Population: {item.Population}</p>
          <p>Slug Nation: {item["Slug Nation"]}</p>
{/* When the "Enlist" button is clicked, the onEnlist prop function is called with the selected population data item as an argument(EVENT HANDLING) */}
           <button onClick={() => onEnlist(item)}>Enlist</button>  
        </div>
      ))}
    </div>
  );
};

export default PopulationDataSearch;
