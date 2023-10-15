import React, { useState } from "react";
import DeveloperCard from "./DeveloperCard";

const Developers = ({ developerData }) => {
  const [filter, setFilter] = useState("");
  const [developers, setDevelopers] = useState(developerData);

  const handleInputChange = (event) => {
    const inputValue = event.target.value.toLowerCase();
    setFilter(inputValue);

    const filteredDevelopers = developerData.filter((developer) => {
      const { name, title, username } = developer;
      return (
        name?.toLowerCase().includes(inputValue) ||
        title?.toLowerCase().includes(inputValue) ||
        username?.toLowerCase().includes(inputValue)
      );
    });

    setDevelopers(filteredDevelopers);
  };

  return (
    <>
      <div id="searchContainer">
        <input
          type="text"
          id="searchInput"
          placeholder="Search for developers"
          value={filter}
          onChange={handleInputChange}
        />
      </div>
      <div className="container flex card-container" id="cardContainer">
        {developers.map((developer, index) => (
          <div key={index}>
            <DeveloperCard developer={developer} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Developers;
