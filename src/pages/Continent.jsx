import React from 'react';
import { useHistory } from 'react-router-dom';

function Continent() {
  const history = useHistory();
  const route = history.location.pathname;
  return (
    <main>
      <h1>CONTINENTE !</h1>
      <p>{ route }</p>
    </main>
  );
}

export default Continent;

// import React from 'react';
// import getCountriesData from '../services/getCountriesData';
// class Continent extends React.Component {
//   state = {
//     countriesData: [],
//     isLoading: true,
//   }
//   async componentDidMount() {
//     const countriesData = await getCountriesData();
//     this.setState({ 
//       countriesData,
//       isLoading: false,
//       ids: [],
//     });
//   };
//   render() {
//     const { countriesData, isLoading } = this.state;
//     if (isLoading) { return <h1>Loading...</h1> };
//     console.log(countriesData);
//     return (
//       <main>
//         <h1>Ver Países Pelo Continente:</h1>
//         { countriesData.map(({ nome, localizacao, id, flag }) => (
//           <div key={ id['M49'] }>
//             <h2>{ nome.abreviado }</h2>
//             <img
//               src={ flag }
//               alt={ id['ISO-3166-1-ALPHA-3'] }
//             />
//             <p>{ nome['abreviado-EN'] }</p>
//             <p>{ localizacao['sub-regiao'].nome }</p>
//           </div>
//         )) }
//       </main>
//     );
//   }
// }
// export default Continent;
