import React from 'react';
import getCountries from '../services/getCountries';

class Continent extends React.Component {
  state = {
    countriesData: [],
    isLoading: true,
  }

  async componentDidMount() {
    const countriesData = await getCountries();
    this.setState({ 
      countriesData,
      isLoading: false,
    });
  }

  render() {
    const { countriesData, isLoading } = this.state;
    if (isLoading) { return <h1>Loading...</h1> };
    console.log(countriesData);
    return (
      <main>
        <h1>Ver Países Pelo Continente:</h1>
        { countriesData.map(({ nome, localizacao }, index) => (
          <div key={ index }>
            <h2>{ nome.abreviado }</h2>
            <p>{ localizacao['sub-regiao'].nome }</p>
          </div>
        )) }
      </main>
    );
  }
}

export default Continent;
