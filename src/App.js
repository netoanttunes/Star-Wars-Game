import React, { useCallback, useEffect, useState } from "react";

import './App.css';

export default function App() {
  const [planet, setPlanet] = useState ([]);
  const [id, setId] = useState (1);
  const [films, setFilms] = useState ([])

  const fetchPlanet = useCallback( async (id) => {
    const response = await fetch(`https://swapi.dev/api/planets/${id}`);
      const data = await response.json();
      const { films } = data;
      setPlanet(data);
      setFilms(films);
  }, []);
    
  useEffect(() => {
    fetchPlanet(id);
  }, [id, fetchPlanet]);

  function handleNext(min, max){
     min = Math.ceil(min);
     max = Math.floor(max);
    return setId( Math.floor(Math.random() * (max - min + 1)) + min);
  }
 
  return (
    <div className="App">

      <h1 className="titulo">Qual é o Planeta?</h1>
     
      <form>
        <ul>
           <li className="Planeta"><h1>{planet.name}</h1></li>
           <li><h2>População: {planet.population}</h2></li>
           <li><h2>Clima: {planet.climate}</h2></li>
           <li><h2>Terreno: {planet.terrain}</h2></li>
           <li><h2>Apareceu em {films.length} Filmes</h2></li>
                
        </ul> 
       </form>
      
       <button className="button" onClick={() => handleNext(1,62)}>Vai</button>

    </div>
  );
}
