const request = require('request');

function requestAsync(searchTerm = '', url = '') {
  if (searchTerm.length > 0) {
    url = `https://swapi.co/api/people/?search=${searchTerm}`;
  }
  return new Promise((resolve, reject) => {
    request(url, (error, body, response) => {
      if (error) {
        return reject(error);
      }
      resolve(JSON.parse(response));
    });
  });
}

async function getData(searchTerm) {
  try {
    const data = await requestAsync(searchTerm);
    const { results: [{ name, films }] } = data;
    const filmData = await getFilmInfo(films);
    const titles = filmData.map(film => film.title);
    console.log(`${name} plays in ${films.length} ${films.length > 1 ? 'films' : 'film'}: ${titles}`);
  } catch(error) {
    console.log(error);
  }
}

async function getFilmInfo(urls) {
  const promiseArray = urls.map(url => requestAsync('', url));
  return Promise.all(promiseArray);
}

module.exports = {
  getData
};
