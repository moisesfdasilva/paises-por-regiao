import React, { useContext } from 'react';
import CountriesContext from '../context/CountriesContext';

function Continent() {
  const { countriesListByRegion } = useContext(CountriesContext);
  return (
    <main>
      <h1>{ countriesListByRegion[0].localizacao['sub-regiao'].nome }</h1>
      { countriesListByRegion.map(({ nome, id, flag }) => (
        <div key={ id.M49 }>
          <h2>{ nome.abreviado }</h2>
          <img
            src={ flag }
            alt={ id['ISO-3166-1-ALPHA-3'] }
          />
          <p>{ nome['abreviado-EN'] }</p>
        </div>
      )) }
    </main>
  );
}

export default Continent;
