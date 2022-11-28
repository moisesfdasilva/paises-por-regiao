import React, { useContext, useEffect } from 'react';
import CountriesContext from '../context/CountriesContext';

import Header from '../components/Header';

function Country() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const { country } = useContext(CountriesContext);
  const { id, nome, flag, linguas, governo, area, historico,
    localizacao } = country;

  const aboutCountry = historico.split('Fontes:');
  const references = (aboutCountry[1].trim()).split(`https://`);
  references.shift();

  let textAjust = aboutCountry[0].replace('. ','--');
  textAjust = textAjust.replace('. ','.__');
  textAjust = textAjust.replace('--', '. ');
  const newTexts = textAjust.split('__');
  
  const formatNumber = new Intl.NumberFormat();
  return (
    <article>
      <Header />
      <h1>
        { `${nome.abreviado} (${id['ISO-3166-1-ALPHA-2']}/` }
        { `${id['ISO-3166-1-ALPHA-3']})` }
      </h1>
      <img
        src={ flag }
        alt={ id['ISO-3166-1-ALPHA-3'] }
      />
      <div>
        <h3>Nome:</h3>
        <ul>
          <li>{ `${nome.abreviado} (em Português, pt-BR); ` }</li>
          <li>{ `${nome['abreviado-EN']} (em Inglês, en); e ` }</li>
          <li>{ `${nome['abreviado-ES']}, (em Espanhol, es).` }</li>
        </ul>
      </div>
      <div>
        <h3>Área:</h3>
        <ul>
          <li>{ `${formatNumber.format(area.total)}km².` }</li>
        </ul>
      </div>
      <div>
        <h3>Região:</h3>
        <ul>
          <li>
            { `${localizacao['regiao'].nome} (` }
            { `${localizacao['sub-regiao'].nome}).` }
          </li>
        </ul>
      </div>
      <div>
        <h3>Capital:</h3>
        <ul>
          <li>{ `${governo.capital.nome}.` }</li>
        </ul>
      </div>
      <div>
        <h3>Idioma:</h3>
        <ul>
          <li>{ `${linguas[0].nome}.` }</li>
        </ul>
      </div>
      <div>
        <h3>Unidade monetária:</h3>
        <ul>
          <li>{ `${country['unidades-monetarias'][0].nome}.` }</li>
        </ul>
      </div>
      <div>
        <h3>Sobre o país:</h3>
        <ul>
          { newTexts.map((newText, index) => (
            <li key={ index }>
              { newText }
            </li>
          )) }
        </ul>
      </div>
      <div>
        <h3>Fonte(s):</h3>
        <ul>
          { references.map((reference, index) => (
            <li key={ index }>
              { `https:// ${reference}` }
            </li>
          )) }
        </ul>
      </div>
    </article>
  );
}

export default Country;
// https://flagcdn.com/160x120/ht.png
