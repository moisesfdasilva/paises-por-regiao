const getCountriesText = async () => {
  const COUNTRIES_BASE_API = 'https://servicodados.ibge.gov.br/api/v1/paises';
  const response = await fetch(COUNTRIES_BASE_API);
  const responseJson = await response.json();
  return responseJson;
};

const countriesNoRepeat = async () => {
  const countries = await getCountriesText();
  const arrayIds = [];
  countries.forEach(({ id })=>(
    arrayIds.push(id['M49'])
  ));
  const newArrayIds = [];
  for (let index = 0; index < arrayIds.length; index += 1) {
    if (newArrayIds.every((id) => (id !== arrayIds[index]))) {
      newArrayIds.push(arrayIds[index]);
    }
  };
  const newCountriesData = [];
  for (let index = 0; index < newArrayIds.length; index += 1) {
    const countryData = countries.find(({ id } ) => (id['M49'] === newArrayIds[index]));
    newCountriesData.push(countryData);
  };
  return newCountriesData;
};

const getCountriesData = async () => {
  const countries = await countriesNoRepeat();
  countries.map((country) => {
    const countryAbbreviation = (country.id['ISO-3166-1-ALPHA-2']).toLowerCase();
    return(country['flag'] = `https://flagcdn.com/w320/${countryAbbreviation}.png`)
  });
  return countries;
};

export default getCountriesData;
