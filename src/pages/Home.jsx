import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import CountriesContext from '../context/CountriesContext';

import Header from '../components/Header';

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

  const selectContinent = (enableContinent, isEnable) => {
    setContinentsObj((state) => ({
      ...state,
      [enableContinent]: !isEnable,
    }));
  };

  const selectRegion = (regionId) => {
    const newList = countriesListBase.filter(({ localizacao }) => (
      localizacao['sub-regiao'].id.M49 === Number(regionId)));
    modifyCountriesListByRegion(newList);
    history.push(`/continent/${regionId}`);
  };

  const americaImg = 'https://media.istockphoto.com/id/499334886/pt/vetorial/mapa-de-am%C3%A9rica-preto-sobre-fundo-branco-vector.jpg?s=612x612&w=0&k=20&c=S50LY2FLoucg6VT-HNcODzw3-QUDyE3R_hvHBGrq80I=';
  const europeImg = 'https://static.vecteezy.com/system/resources/previews/005/091/136/non_2x/black-europa-map-illustration-free-vector.jpg';
  const africaImg = 'https://static.vecteezy.com/system/resources/previews/000/550/959/non_2x/vector-detailed-map-of-africa-continent-in-black-silhouette.jpg';
  const asiaImg = 'https://i.pinimg.com/originals/76/be/e7/76bee7261ba52f8bbba55acfd2e8a5b4.png';
  const oceaniaImg = 'https://img.freepik.com/vetores-premium/mapa-detalhado-da-australia-e-oceania_47243-670.jpg?w=2000';

  if (isLoading) { return <h1>Loading...</h1>; }
  return (
    <section>
      <Header />
      <div style={ { paddingTop: '95px' } }>
        <div>
          <h1>Continentes:</h1>
          <p>Escolha o continete e em seguida a respectiva região.</p>
        </div>
        <div className="ui fluid vertical menu">
          <div
            className="item"
            style={ { cursor:'pointer'} }
            onClick={ () => selectContinent('enableAmerica', enableAmerica) }
          >
            <div className="ui equal width center aligned padded grid">
              <div className="column middle aligned">
                <img className="ui mini image" src={ americaImg } alt="americaImg"/>
              </div>
              <div className="column middle aligned"><h3>América</h3></div>
              <div className="column middle aligned">
                { (!enableAmerica) && (<h3> ▾</h3>) }
                { (enableAmerica) && (<h3> ▴</h3>) }
              </div>
            </div>
          </div>
          { (enableAmerica) && (
            <div className="item" style={ { cursor:'pointer' } }>
              <h4 onClick={ () => selectRegion(21) }>Norte</h4>
              <h4 onClick={ () => selectRegion(419) }>Latina e Caribe</h4>
            </div>
          ) }
          <div
            className="item"
            style={ { cursor:'pointer' } }
            onClick={ () => selectContinent('enableEurope', enableEurope) }
          >
            <div className="ui equal width center aligned padded grid">
              <div className="column middle aligned">
                <img className="ui mini image" src={ europeImg } alt="europeImg"/>
              </div>
              <div className="column middle aligned"><h3>Europa</h3></div>
              <div className="column middle aligned">
                { (!enableEurope) && (<h3> ▾</h3>) }
                { (enableEurope) && (<h3> ▴</h3>) }
              </div>
            </div>
          </div>
          { (enableEurope) && (
            <div className="item" style={ { cursor:'pointer' } }>
              <h4 onClick={ () => selectRegion(39) }>Meridional (Sul da Europa)</h4>
              <h4 onClick={ () => selectRegion(155) }>Ocidental (Oeste da Europa)</h4>
              <h4 onClick={ () => selectRegion(151) }>Oriental (Leste da Europa)</h4>
              <h4 onClick={ () => selectRegion(154) }>Setentrional (Norte da Europa)</h4>
            </div>
          ) }
          <div
            className="item"
            style={ { cursor:'pointer' } }
            onClick={ () => selectContinent('enableAfrica', enableAfrica) }
          >
            <div className="ui equal width center aligned padded grid">
              <div className="column middle aligned">
                <img className="ui mini image" src={ africaImg } alt="africaImg"/>
              </div>
              <div className="column middle aligned"><h3>África</h3></div>
              <div className="column middle aligned">
                { (!enableAfrica) && (<h3> ▾</h3>) }
                { (enableAfrica) && (<h3> ▴</h3>) }
              </div>
            </div>
          </div>
          { (enableAfrica) && (
            <div className="item" style={ { cursor:'pointer' } }>
              <h4 onClick={ () => selectRegion(202) }>Setentrional (Norte da África)</h4>
              <h4 onClick={ () => selectRegion(15) }>Subsaariana</h4>
            </div>
          ) }
          <div
            className="item"
            style={ { cursor:'pointer' } }
            onClick={ () => selectContinent('enableAsia', enableAsia) }
          >
            <div className="ui equal width center aligned padded grid">
              <div className="column middle aligned">
                <img className="ui mini image" src={ asiaImg } alt="asiaImg"/>
              </div>
              <div className="column middle aligned"><h3>Ásia</h3></div>
              <div className="column middle aligned">
                { (!enableAsia) && (<h3> ▾</h3>) }
                { (enableAsia) && (<h3> ▴</h3>) }
              </div>
            </div>
          </div>
          { (enableAsia) && (
            <div className="item" style={ { cursor:'pointer' } }>
              <h4 onClick={ () => selectRegion(34) }>Meridional (Sul da Ásia)</h4>
              <h4 onClick={ () => selectRegion(145) }>Ocidental (Oeste da Ásia)</h4>
              <h4 onClick={ () => selectRegion(143) }>Ásia central</h4>
              <h4 onClick={ () => selectRegion(30) }>Oriental (Leste da Ásia)</h4>
              <h4 onClick={ () => selectRegion(35) }>Sudeste</h4>
            </div>
          ) }
          <div
            className="item"
            style={ { cursor:'pointer' } }
            onClick={ () => selectContinent('enableOceania', enableOceania) }
          >
            <div className="ui equal width center aligned padded grid">
              <div className="column middle aligned">
                <img className="ui mini image" src={ oceaniaImg } alt="oceaniaImg"/>
              </div>
              <div className="column middle aligned"><h3>Oceânia</h3></div>
              <div className="column middle aligned">
                { (!enableOceania) && (<h3> ▾</h3>) }
                { (enableOceania) && (<h3> ▴</h3>) }
              </div>
            </div>
          </div>
          { (enableOceania) && (
            <div className="item" style={ { cursor:'pointer' } }>
              <h4 onClick={ () => selectRegion(53) }>Austrália e Nova Zelândia</h4>
              <h4 onClick={ () => selectRegion(54) }>Melanésia</h4>
              <h4 onClick={ () => selectRegion(57) }>Micronésia</h4>
              <h4 onClick={ () => selectRegion(61) }>Polinésia</h4>
            </div>
          ) }
          <div className="item">
            <div className="ui equal width center aligned padded grid">
              <div className="column middle aligned">
                <h3>Antartida</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
