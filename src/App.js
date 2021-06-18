import React, { useState } from "react";

import CitiesList from "./CitiesList";
import City from "./City";

function App() {
  const [cities, setCities] = useState([
    { name: "Москва", description: "Столица России" },
    { name: "Зеленоград", description: "Научный спутник Москвы" },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const city = cities[currentIndex];

  const handlerChangeCity = (n, description) => {
    setCities(
      cities.map((city, index) => {
        if (index === n) {
          return {
            ...city,
            description,
          };
        }
        return city;
      })
    );
  }
  const handlerChangeCityNew = (name, description) => {
    setCities(
      cities.map((city) => {
        if (city.name === name) {
          return {
            ...city,
            description,
          };
        }
        return city;
      })
    );
  }

  const handlerselectCity = (n) => setCurrentIndex(n);
  
  return (
    <div className="App">
      {/* <City cities={cities} onChangeCity={handlerChangeCity} currentIndex={currentIndex}/> */}
      <City city={city} onChangeCity={handlerChangeCityNew}/>
      <CitiesList cities={cities} onSelectCity={handlerselectCity}/>
    </div>
  );
}

export default App;
