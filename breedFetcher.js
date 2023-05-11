const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (body === undefined) {
      callback(`Your request failed. Please check your URL and try again. ${error}`, null);
    } else {
      const data = JSON.parse(body);
      if (data[0] !== undefined) {
        callback(null, data[0].description);
      } else {
        callback(`This breed cannot be found. Please try again. ${error}`, null);
      }
    }
  });
};



module.exports = { fetchBreedDescription };