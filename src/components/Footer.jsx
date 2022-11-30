import React from 'react';

function Footer() {
  return(
    <footer className="ui inverted vertical footer segment">
      <div className="ui grid container">
        <div className="wide column">
          <p>
            Esta aplicação foi desenvolvida com o intuíto de proporcionar ao usuário 
            conhecer de detalhes dos paises selecionados, de acordo com a região de cada continente. 
            Isso em dados publicados pelo IBGE.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;