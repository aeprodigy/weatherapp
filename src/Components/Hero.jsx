import axios from 'axios';
import React, { useState } from 'react'

const Hero = () => {
  //states
  const [data, setData] = useState({}); //the object data
  const [location, setLocation] = useState(""); //the state for location i.e city

  //dependables for the project
  // TheOpenWeather API key
  const ApiKey = "895284fb2d2c50a520ea537456963d9c";
 
  //the searchlocation function
  const searchLocation = (event) => {
     
 if(event.key === 'Enter' && location){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${ApiKey}`;

     axios.get(url).then((response) => {
       setData(response.data); // Correct: storing response in 'data'
       console.log(response.data); // Logs the API response
     });
     
   setLocation("");
  }
  };


  return (
    <div>
      <h1 className="text-orange-400 sm:text-4xl text-2xl font-bold">
        The weather Application
      </h1>
      <input type='text'
      value={location}
      placeholder='Enter city Name..'
        onChange={(event)=> setLocation(event.target.value)}
        onKeyDown={searchLocation}
      />
      <p>{data.name}</p>
      <h3>{data.main ? data.main.temp : null}</h3>
    </div>
  );
}

export default Hero