import React, { useContext, useEffect } from 'react';
import CountriesContext from '../context/CountriesContext';

import Header from '../components/Header';
import Footer from '../components/Footer';

function Country() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const { country } = useContext(CountriesContext);
  const { id, nome, flag, linguas, governo, area, historico, localizacao } = country;

  let aboutCountry = [];
  if (historico.includes('Fontes:')) {
    aboutCountry = historico.split('Fontes:');
  } else if (historico.includes('Fonte:')) {
    aboutCountry = historico.split('Fonte:');
  } else {
    aboutCountry = [historico, 'https://www.ibge.gov.br/']
  }

  const references = (aboutCountry[1].trim()).split(`https://`);
  references.shift();

  let textAjust = aboutCountry[0].replaceAll('. ','--');
  textAjust = textAjust.replaceAll('.','.__');
  textAjust = textAjust.replaceAll('--', '. ');
  const newTexts = textAjust.split('__');

  const formatNumber = new Intl.NumberFormat('pt-BR');
  return (
    <article>
      <Header />
      <div style={ { paddingTop: '95px', paddingLeft: '15px', paddingBottom: '15px' } }>
        <h1 className="ui header">
          { `${nome.abreviado} (${id['ISO-3166-1-ALPHA-2']}/` }
          { `${id['ISO-3166-1-ALPHA-3']})` }
        </h1>
        <img style={ { border:'solid 1px grey' } } src={ flag } alt={ id['ISO-3166-1-ALPHA-3'] }/>
        <div className="ui section divider"/>
        <h3 className="ui header">Nome:</h3>
        <div style={ { paddingLeft: '15px' } }>
          <p>{ `${nome.abreviado} (em Português, pt-BR); ` }</p>
          <p>{ `${nome['abreviado-EN']} (em Inglês, en); e ` }</p>
          <p>{ `${nome['abreviado-ES']}, (em Espanhol, es).` }</p>
        </div>
        <div className="ui section divider"/>
        <h3 className="ui header">Área:</h3>
        <div style={ { paddingLeft: '15px' } }>
          <p>{ `${formatNumber.format(area.total)}km².` }</p>
        </div>
        <div className="ui section divider"/>
        <h3 className="ui header">Região:</h3>
        <div style={ { paddingLeft: '15px' } }>
          <p>
            { `${localizacao['regiao'].nome} (` }
            { `${localizacao['sub-regiao'].nome}).` }
          </p>
        </div>
        <div className="ui section divider"/>
        <h3 className="ui header">Capital:</h3>
        <div style={ { paddingLeft: '15px' } }>
          <p>{ `${governo.capital.nome}.` }</p>
        </div>
        <div className="ui section divider"/>
        <h3 className="ui header">Idioma:</h3>
        <div style={ { paddingLeft: '15px' } }>
          <p>{ `${linguas[0].nome}.` }</p>
        </div>
        <div className="ui section divider"/>
        <h3 className="ui header">Unidade monetária:</h3>
        <div style={ { paddingLeft: '15px' } }>
          <p>{ `${country['unidades-monetarias'][0].nome}.` }</p>
        </div>
        <div className="ui section divider"/>
        <h3 className="ui header">Sobre o país:</h3>
        <div style={ { paddingLeft: '15px' } }>
          { newTexts.map((newText, index) => (
            <p key={ index }>{ newText }</p>
          )) }
        </div>
        <div className="ui section divider"/>
        <h3 className="ui header">Fonte(s):</h3>
        <div style={ { paddingLeft: '15px' } }>
          { references.map((reference, index) => (
            <p key={ index }>{ `https://${reference}` }</p>
          )) }
        </div>
      </div>
      <Footer />
    </article>
  );
}

export default Country;
