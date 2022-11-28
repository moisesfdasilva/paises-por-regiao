import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const worldMap = "https://static.vecteezy.com/ti/vetor-gratis/p1/3330836-mapa-mundi-simples-em-estilo-plano-isolado-em-fundo-preto-gratis-vetor.jpg";

  return (
    <section className="ui fixed inverted menu">
      <section className="ui container">
        <div className="header item">
          <div className="ui tiny image">
            <img className="ui tiny image" src={ worldMap } alt="World Map"/>
          </div>
          <div className="middle aligned content">
            <h3 className="header">Paises por região</h3>
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
                <Link to="/continent/21" className="item">Norte</Link>
                <Link to="/continent/419" className="item">Latina e Caribe</Link>
              </div>
            </div>
            <div className="item">
              <i className="dropdown icon"></i>
              Europa
              <div className="menu">
                <Link to="/continent/39" className="item">Meridional</Link>
                <Link to="/continent/155" className="item">Ocidental</Link>
                <Link to="/continent/151" className="item">Oriental</Link>
                <Link to="/continent/154" className="item">Setentrional</Link>
              </div>
            </div>
            <div className="item">
              <i className="dropdown icon"></i>
              África
              <div className="menu">
                <Link to="/continent/15" className="item">Setentrional</Link>
                <Link to="/continent/202" className="item">Subsaariana</Link>
              </div>
            </div>
            <div className="item">
              <i className="dropdown icon"></i>
              Ásia
              <div className="menu">
                <Link to="/continent/34" className="item">Meridional</Link>
                <Link to="/continent/145" className="item">Ocidental</Link>
                <Link to="/continent/143" className="item">Ásia central</Link>
                <Link to="/continent/30" className="item">Oriental</Link>
                <Link to="/continent/35" className="item">Sudeste</Link>
              </div>
            </div>
            <div className="item">
              <i className="dropdown icon"></i>
              Oceânia
              <div className="menu">
                <Link to="/continent/53" className="item">Austrália e Nova Zelândia</Link>
                <Link to="/continent/54" className="item">Melanésia</Link>
                <Link to="/continent/57" className="item">Micronésia</Link>
                <Link to="/continent/61" className="item">Polinésia</Link>
              </div>
            </div>
            <Link to="/notfound" className="item">Antartida</Link>
          </div>
        </div>
        <div className="right item">
          <i className="brazil flag"></i>
          pt-BR
        </div>
      </section>
    </section>
  )
}

export default Header;

// style={ { backgroundColor:'#E0FFFF' } }
