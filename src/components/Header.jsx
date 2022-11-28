import React from 'react';

function Header() {
  const worldMap = "https://static.vecteezy.com/ti/vetor-gratis/p1/3330836-mapa-mundi-simples-em-estilo-plano-isolado-em-fundo-preto-gratis-vetor.jpg";

  return (
    <section className="ui fixed inverted menu">
      <section className="ui container">
        <div className="header item">
          <div class="ui tiny image">
            <img className="ui tiny image" src={ worldMap } alt="World Map"/>
          </div>
          <div class="middle aligned content">
            <h3 class="header">Paises por região</h3>
          </div>
        </div>
        <div className="item">
          Home
        </div>
        <div class="ui simple dropdown item">
          Continentes <i class="dropdown icon"></i>
          <div class="menu">
            <div class="item">
              <i class="dropdown icon"></i>
              América
              <div class="menu">
                <p>Norte</p>
                <p>Latina e Caribe</p>
              </div>
            </div>
            <div class="item">
              <i class="dropdown icon"></i>
              Europa
              <div class="menu">
                <p>Meridional</p>
                <p>Ocidental</p>
                <p>Oriental</p>
                <p>Setentrional</p>
              </div>
            </div>
            <div class="item">
              <i class="dropdown icon"></i>
              África
              <div class="menu">
                <p>Setentrional</p>
                <p>Subsaariana</p>
              </div>
            </div>
            <div class="item">
              <i class="dropdown icon"></i>
              Ásia
              <div class="menu">
                <p>Meridional</p>
                <p>Ocidental</p>
                <p>Ásia central</p>
                <p>Oriental</p>
                <p>Sudeste</p>
              </div>
            </div>
            <div class="item">
              <i class="dropdown icon"></i>
              Oceânia
              <div class="menu">
                <p>Austrália e Nova Zelândia</p>
                <p>Melanésia</p>
                <p>Micronésia</p>
                <p>Polinésia</p>
              </div>
            </div>
            <div class="item">
              <p>Antartida</p>
            </div>
          </div>
        </div>
        <div className="right item">
          <i class="brazil flag"></i>
          pt-BR
        </div>
      </section>
    </section>
  )
}

export default Header;

// style={ { backgroundColor:'#E0FFFF' } }
