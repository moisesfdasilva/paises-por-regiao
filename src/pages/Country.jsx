import React, { useContext } from 'react';
import CountriesContext from '../context/CountriesContext';

function Country() {
  const { country } = useContext(CountriesContext);
  const { id, nome, flag, linguas, governo, area, historico,
    localizacao } = country;
  const formatNumber = new Intl.NumberFormat();
  return (
    <article>
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
          <li>{ `${nome.abreviado} (em Português, BR); ` }</li>
          <li>{ `${nome['abreviado-EN']} (em Inglês, EN); e ` }</li>
          <li>{ `${nome['abreviado-ES']}, (em Espanhol, ES).` }</li>
        </ul>
      </div>
      <div>
        <p>{ `Área: ${formatNumber.format(area.total)}km².` }</p>
        <p>
          { `Região: ${localizacao['regiao'].nome}, ` }
          { `${localizacao['sub-regiao'].nome}.` }
        </p>
        <p>{ `Capital: ${governo.capital.nome}.` }</p>
        <p>{ `Idioma: ${linguas[0].nome}.` }</p>
        <p>{ `Unidade monetária: ${country['unidades-monetarias'][0].nome}.` }</p>
      </div>
      <p>{ historico }</p>
    </article>
  );
}

export default Country;
