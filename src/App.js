import React, { useEffect, useState } from "react";

import './App.css';

export default function App() {
  const [planet, setPlanet] = useState ([]);
  const [id, setId] = useState (1);
  const [films, setFilms] = useState ([])

    
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://swapi.co/api/planets/${id}`);
      const data = await response.json();
      setPlanet(data);
      
      }
    fetchData();
  }, [id]);

  useEffect(() => {
    async function filmsNumber() {
      const response = await fetch(`https://swapi.co/api/planets/${id}`);
      const { films } = await response.json();
      setFilms(films);
      }
    filmsNumber();
  }, [id]);

  function handleNext(min, max){
     min = Math.ceil(min);
     max = Math.floor(max);
    return setId( Math.floor(Math.random() * (max - min + 1)) + min);
  }
 
  return (
    <div className="App">
     
      <form>
        <ul>
           <li className="Planeta"><h1>{planet.name}</h1></li>
           <li><h2>Population: {planet.population}</h2></li>
           <li><h2>Climate: {planet.climate}</h2></li>
           <li><h2>Terrain: {planet.terrain}</h2></li>
           <li><h2>Featured in {films.length} Films</h2></li>
                
        </ul> 
       </form>
      
       <button className="button" onClick={() => handleNext(1,62)}>NEXT</button>

    </div>
  );
}


