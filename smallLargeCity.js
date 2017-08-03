// Small or Large city - function
const whatCities = { vancouver: 603502, burnaby: 223220, langley: 104177, surrey: 705000, abbotsford: 100000 };

function sizeOfCity(cities) {
  let nameOfCity = '';
  let populationOfCity = 0;
  let result = '';
  for (let city in cities) {
    nameOfCity = city[0].toUpperCase() + city.substr(1);
    populationOfCity = cities[city];
  };
  return;
}
