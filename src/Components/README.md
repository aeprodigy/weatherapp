import axios from "axios";
import React, { useState } from "react";

const Hero = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  // Your OpenWeather API key
  const ApiKey = "895284fb2d2c50a520ea537456963d9c";

  // Method to search location and fetch weather data
  const searchLocation = (event) => {
    if (event.key === "Enter" && location) {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${ApiKey}`;
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation(""); // Clear the input field after fetching
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter city name"
        value={location}
        onChange={(event) => setLocation(event.target.value)} // Update location state on change
        onKeyDown={searchLocation} // Trigger fetch on 'Enter' key press
      />

      {/* Conditionally display fetched city name */}
      {data.name && <h1>{data.name}</h1>}

      {/* Conditionally display temperature if available */}
      {data.main && <p>Temperature: {data.main.temp} °F</p>}

      {data.weather && <p>Wind speed: {data.weather[0].description}</p>}
      
    </div>
  );
};

export default Hero;
