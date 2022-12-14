import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import CountriesContext from './CountriesContext';
import getCountriesData from '../services/getCountriesData';

function CountriesProvider({ children }) {
  const [countriesObj, setCountriesObj] = useState({
    isLoading: true,
    countriesListBase: [],
    countriesListByRegion: [],
    country: {},
  });

  const getCountries = async () => {
    const results = await getCountriesData()
    setCountriesObj((state) => ({
      ...state,
      isLoading: false,
      countriesListBase: [...results],
    }));
  };

  const modifyCountriesListByRegion = (list) => {
    setCountriesObj((state) => ({
      ...state,
      countriesListByRegion: [...list],
    }));
  };

  const modifyCountry = (countryInfo) => {
    setCountriesObj((state) => ({
      ...state,
      country: countryInfo,
    }));
  };

  const contextValue = useMemo(() => ({
    ...countriesObj,
    getCountries,
    modifyCountriesListByRegion,
    modifyCountry,
  }), [countriesObj]);

  return (
    <main>
      <CountriesContext.Provider value={ contextValue }>
        { children }
      </CountriesContext.Provider>
    </main>
  );
}

CountriesProvider.propTypes = {
  children: PropTypes.elementType,
}.isRequired;

export default CountriesProvider;
