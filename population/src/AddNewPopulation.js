import React, { useState } from 'react';

const AddNewPopulation = ({ onAddPopulation }) => {
  const [newPopulationData, setNewPopulationData] = useState({
    "ID Year": "",
    "ID Nation": "",
    "Nation": "",
    "Year": "",
    "Population": "",
    "Slug Nation": ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewPopulationData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log("Submitting data:", newPopulationData); // Debugging line
    fetch('http://localhost:3000/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPopulationData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response from server:", data); // Debugging line
        onAddPopulation(data); // After the JSON server returns the newly added data with an ID it sets new
        setNewPopulationData({
          "ID Year": "",
          "ID Nation": "",
          "Nation": "",
          "Year": "",
          "Population": "",
          "Slug Nation": ""
        });
      })
      .catch((error) => {
        console.error("Failed to add data to the JSON server:", error);
      });
  };

  return (
    <div>
      <h2>ADD POPULATION</h2>
      <input
        type="text"
        placeholder="ID Year"
        name="ID Year"
        value={newPopulationData["ID Year"]}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="ID Nation"
        name="ID Nation"
        value={newPopulationData["ID Nation"]}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Nation"
        name="Nation"
        value={newPopulationData["Nation"]}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Year"
        name="Year"
        value={newPopulationData["Year"]}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Population"
        name="Population"
        value={newPopulationData["Population"]}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Slug Nation"
        name="Slug Nation"
        value={newPopulationData["Slug Nation"]}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Add Population</button>
    </div>
  );
};

export default AddNewPopulation;
