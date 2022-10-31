import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import CountriesContext from '../context/CountriesContext';

function Home() {
  const { isLoading, getCountries, countriesListBase,
    modifyCountriesListByRegion } = useContext(CountriesContext);
  const [continentsObj, setContinentsObj] = useState({
    enableAmerica: false,
    enableEurope: false,
    enableAfrica: false,
    enableAsia: false,
    enableOceania: false,
  });
  const { enableAmerica, enableEurope, enableAfrica, enableAsia,
    enableOceania } = continentsObj;
  const history = useHistory();

  useEffect(() => { getCountries(); }, []);

  const selectContinent = (enable, binary) => {
    setContinentsObj((state) => ({
      ...state,
      [enable]: !binary,
    }));
  };

  const selectRegion = (regionId) => {
    const newList = countriesListBase.filter(({ localizacao }) => (
      localizacao['sub-regiao'].id.M49 === Number(regionId)));
    modifyCountriesListByRegion(newList);
    history.push(`/continent/${regionId}`);
  };

  if (isLoading) { return <h1>Loading...</h1>; }
  return (
    <main>
        <h1>Continentes:</h1>
        <h2
          onClick={ () => selectContinent('enableAmerica', enableAmerica) }
        >América</h2>
          { (enableAmerica) && (
            <section>
              <h4 onClick={ () => selectRegion(21) }>Norte</h4>
              <h4 onClick={ () => selectRegion(419) }>Latina e Caribe</h4>
            </section>
          )}
        <h2
          onClick={ () => selectContinent('enableEurope', enableEurope) }
        >Europa</h2>
          { (enableEurope) && (
            <section>
              <h4 onClick={ () => selectRegion(39) }>Meridional (Sul da Europa)</h4>
              <h4 onClick={ () => selectRegion(155) }>Ocidental (Oeste da Europa)</h4>
              <h4 onClick={ () => selectRegion(151) }>Oriental (Leste da Europa)</h4>
              <h4 onClick={ () => selectRegion(154) }>Setentrional (Norte da Europa)</h4>
            </section>
          )}
        <h2
          onClick={ () => selectContinent('enableAfrica', enableAfrica) }
        >África</h2>
          { (enableAfrica) && (
            <section>
              <h4 onClick={ () => selectRegion(202) }>Setentrional (Norte da África)</h4>
              <h4 onClick={ () => selectRegion(15) }>Subsaariana</h4>
            </section>
          )}
        <h2
          onClick={ () => selectContinent('enableAsia', enableAsia) }
        >Ásia</h2>
          { (enableAsia) && (
            <section>
              <h4>Central</h4>
              <h4 onClick={ () => selectRegion(34) }>Meridional (Sul da Ásia)</h4>
              <h4 onClick={ () => selectRegion(145) }>Ocidental (Oeste da Ásia)</h4>
              <h4 onClick={ () => selectRegion(143) }>Ásia central</h4>
              <h4 onClick={ () => selectRegion(30) }>Oriental (Leste da Ásia)</h4>
              <h4 onClick={ () => selectRegion(35) }>Sudeste</h4>
            </section>
          )}
        <h2
          onClick={ () => selectContinent('enableOceania', enableOceania) }
        >Oceânia</h2>
          { (enableOceania) && (
            <section>
              <h4 onClick={ () => selectRegion(53) }>Austrália e Nova Zelândia</h4>
              <h4 onClick={ () => selectRegion(54) }>Melanésia</h4>
              <h4 onClick={ () => selectRegion(57) }>Micronésia</h4>
              <h4 onClick={ () => selectRegion(35) }>Polinésia</h4>
            </section>
          )}
        <h2>Antartida</h2>
      </main>
  );
}

export default Home;
