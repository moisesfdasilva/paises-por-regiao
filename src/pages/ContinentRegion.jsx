import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import CountriesContext from '../context/CountriesContext';

import Header from '../components/Header';
import Footer from '../components/Footer';

function ContinentRegion() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const { countriesListByRegion, modifyCountry } = useContext(CountriesContext);
  const history = useHistory();

  const selectCountry = (countryId) => {
    const { location: { pathname } } = history;
    const newCountry = countriesListByRegion.find(({ id }) => (
      id.M49 === Number(countryId)));
    modifyCountry(newCountry);
    history.push(`${pathname}/${countryId}`);
  };

  return (
    <article>
      <Header />
      <div style={ { paddingTop: '95px', paddingLeft: '15px', paddingBottom: '15px' } }>
        <h1>{ countriesListByRegion[0].localizacao['sub-regiao'].nome }</h1>
      </div>
      <div className="ui link cards" style={ { paddingLeft: '15px', paddingBottom: '15px' } }>
        { countriesListByRegion.map(({ nome, id, flag }) => (
          <div className="grey card" key={ id.M49 } onClick={ () => selectCountry(id.M49) }>
            <img
              style={ { border:'solid 1px grey' } }
              className="ui medium image"
              src={ flag }
              alt={ id['ISO-3166-1-ALPHA-3'] }
            />
            <h2 className="header">{ nome.abreviado }</h2>
            <p>{ nome['abreviado-EN'] }</p>
          </div>
        )) }
      </div>
      <Footer />
    </article>
  );
}

export default ContinentRegion;
