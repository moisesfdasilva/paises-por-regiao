import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import CountriesContext from '../context/CountriesContext';
import { Link } from 'react-router-dom';

function Header() {
  const worldMap = "https://static.vecteezy.com/ti/vetor-gratis/p1/3330836-mapa-mundi-simples-em-estilo-plano-isolado-em-fundo-preto-gratis-vetor.jpg";
  const { countriesListBase,modifyCountriesListByRegion } = useContext(CountriesContext);
  const history = useHistory();
  const selectRegion = (regionId) => {
    const newList = countriesListBase.filter(({ localizacao }) => (
      localizacao['sub-regiao'].id.M49 === Number(regionId)));
    modifyCountriesListByRegion(newList);
    history.push(`/continent/${regionId}`);
  }

  return (
    <header className="ui fixed inverted menu">
      <nav className="ui container">
        <div className="header item">
          <div className="ui tiny image">
            <img className="ui tiny image" src={ worldMap } alt="World Map"/>
          </div>
          <div className="middle aligned content">
            <h3 className="header">Países por região</h3>
          </div>
        </div>
        <Link to="/" className="item">
          <i className="home icon"></i>
          Home
        </Link>
        <div className="ui simple dropdown item">
          Continentes <i className="dropdown icon"></i>
          <div className="menu">
            <div className="item">
              <i className="dropdown icon"></i>
              América
              <div className="menu">
                <h3 onClick={ () => selectRegion(21) } className="item">Norte</h3>
                <h3 onClick={ () => selectRegion(419) } className="item">Latina e Caribe</h3>
              </div>
            </div>
            <div className="item">
              <i className="dropdown icon"></i>
              Europa
              <div className="menu">
                <h3 onClick={ () => selectRegion(39) } className="item">Meridional</h3>
                <h3 onClick={ () => selectRegion(155) } className="item">Ocidental</h3>
                <h3 onClick={ () => selectRegion(151) } className="item">Oriental</h3>
                <h3 onClick={ () => selectRegion(154) } className="item">Setentrional</h3>
              </div>
            </div>
            <div className="item">
              <i className="dropdown icon"></i>
              África
              <div className="menu">
                <h3 onClick={ () => selectRegion(15) } className="item">Setentrional</h3>
                <h3 onClick={ () => selectRegion(202) } className="item">Subsaariana</h3>
              </div>
            </div>
            <div className="item">
              <i className="dropdown icon"></i>
              Ásia
              <div className="menu">
                <h3 onClick={ () => selectRegion(34) } className="item">Meridional</h3>
                <h3 onClick={ () => selectRegion(145) } className="item">Ocidental</h3>
                <h3 onClick={ () => selectRegion(143) } className="item">Ásia central</h3>
                <h3 onClick={ () => selectRegion(30) } className="item">Oriental</h3>
                <h3 onClick={ () => selectRegion(35) } className="item">Sudeste</h3>
              </div>
            </div>
            <div className="item">
              <i className="dropdown icon"></i>
              Oceânia
              <div className="menu">
                <h3 onClick={ () => selectRegion(53) } className="item">Austrália e Nova Zelândia</h3>
                <h3 onClick={ () => selectRegion(54) } className="item">Melanésia</h3>
                <h3 onClick={ () => selectRegion(57) } className="item">Micronésia</h3>
                <h3 onClick={ () => selectRegion(61) } className="item">Polinésia</h3>
              </div>
            </div>
            <Link to="/notfound" className="item">Antartida</Link>
          </div>
        </div>
        <div className="right item"><i className="brazil flag" />pt-BR</div>
      </nav>
    </header>
  )
}

export default Header;
