const getCountries = async () => {
  const COUNTRIES_BASE_API = 'https://servicodados.ibge.gov.br/api/v1/paises';
  const response = await fetch(COUNTRIES_BASE_API);
  const responseJson = await response.json();
  return response.ok ? (
    Promise.resolve(responseJson)) : (Promise.resolve(responseJson));
}

export default getCountries;
