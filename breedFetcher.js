const request = require('request');

const args = process.argv.slice(2);

request(`https://api.thecatap.com/v1/breeds/search?q=${args}`, (error, response, body) => {
  if (body === undefined) {
    console.log(error);
    console.log('Your request failed. Please check your URL and try again.');
  } else {
    const data = JSON.parse(body);
    if (data[0] !== undefined) {
      console.log(data[0].description);
    } else {
      console.log("This breed cannot be found. Please try again.");
    }
  }
});