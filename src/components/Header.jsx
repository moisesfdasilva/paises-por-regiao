import React from 'react';

function Header() {
  const worldMap = "https://img.freepik.com/vetores-premium/mapa-mundi-com-paises-selecionados-no-modelo-preto_115464-208.jpg?w=2000";

  return (
    <section>
      <div>
        <img src={ worldMap } alt="World Map" width="80px"/>
      </div>
      <h2>
        Paises por região
      </h2>
      <p>
        <span>
          <img src="https://flagcdn.com/w20/br.png" alt="Brasil"/>
        </span>
        <span> pt-BR</span>
      </p>
    </section>
  )
}

export default Header;

// style={ { backgroundColor:'#E0FFFF' } }
