import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import CountriesContext from './CountriesContext';

function CountriesProvider({ children }) {
  const [dataResult, setDataResult] = useState([]);
  const contextValue = useMemo(() => ({
    dataResult,
    setDataResult,
  }), [dataResult, setDataResult,]);

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
