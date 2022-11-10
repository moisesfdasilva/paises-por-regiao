import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import CountriesContext from '../context/CountriesContext';

function ContinentRegion() {
  const { countriesListByRegion, modifyCountry } = useContext(CountriesContext);
  const history = useHistory();

  const selectCountry = (countryId) => {
    const { location: { pathname } } = history;
    const newCountry = countriesListByRegion.find(({ id }) => (
      id.M49 === Number(countryId)));
    modifyCountry(newCountry);
    console.log(newCountry);
    history.push(`${pathname}/${countryId}`);
  };

  return (
    <article>
      <h1>{ countriesListByRegion[0].localizacao['sub-regiao'].nome }</h1>
      { countriesListByRegion.map(({ nome, id, flag }) => (
        <div
          key={ id.M49 }
          onClick={ () => selectCountry(id.M49) }
        >
          <h2>{ nome.abreviado }</h2>
          <img
            src={ flag }
            alt={ id['ISO-3166-1-ALPHA-3'] }
          />
          <p>{ nome['abreviado-EN'] }</p>
        </div>
      )) }
    </article>
  );
}

export default ContinentRegion;
