import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [continentsObj, setContinentsObj] = useState({
    enableAmerica: false,
    enableEurope: false,
    enableAfrica: false,
    enableAsia: false,
    enableOceania: false,
  });
  const { enableAmerica, enableEurope, enableAfrica, enableAsia,
    enableOceania } = continentsObj;

  const selectContinent = (enable, binary) => {
    setContinentsObj((state) => ({
      ...state,
      [enable]: !binary,
    }));
  };

  return (
    <main>
        <h1>Continentes:</h1>
        <h2
          onClick={ () => selectContinent('enableAmerica', enableAmerica) }
        >América</h2>
          { (enableAmerica) && (
            <section>
              <Link to={ '/continent/north-america' } >
                <h4>Norte</h4>
              </Link>
              <Link to={ '/continent/latin-america' } >
                <h4>Latina e Caribe</h4>
              </Link>
            </section>
          )}
        <h2
          onClick={ () => selectContinent('enableEurope', enableEurope) }
        >Europa</h2>
          { (enableEurope) && (
            <section>
              <h4>Meridional (Sul da Europa)</h4>
              <h4>Ocidental (Oeste da Europa)</h4>
              <h4>Oriental (Leste da Europa)</h4>
              <h4>Setentrional (Norte da Europa)</h4>
            </section>
          )}
        <h2
          onClick={ () => selectContinent('enableAfrica', enableAfrica) }
        >África</h2>
          { (enableAfrica) && (
            <section>
              <h4>Setentrional (Norte da África)</h4>
              <h4>Subsaariana</h4>
            </section>
          )}
        <h2
          onClick={ () => selectContinent('enableAsia', enableAsia) }
        >Ásia</h2>
          { (enableAsia) && (
            <section>
              <h4>Central</h4>
              <h4>Meridional (Sul da Ásia)</h4>
              <h4>Ocidental (Oeste da Ásia)</h4>
              <h4>Oriental (Leste da Ásia)</h4>
              <h4>Sudeste</h4>
            </section>
          )}
        <h2
          onClick={ () => selectContinent('enableOceania', enableOceania) }
        >Oceânia</h2>
          { (enableOceania) && (
            <section>
              <h4>Austrália e Nova Zelândia</h4>
              <h4>Melanésia</h4>
              <h4>Micronésia</h4>
              <h4>Polinésia</h4>
            </section>
          )}
        <h2>Antartida</h2>
      </main>
  );
}

export default Home;
