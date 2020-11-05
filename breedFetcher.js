/*const request = require('request');

//console.log(breed[0]);
const breedFetcher = function(breed, url){
  request(url, (error, response, body) => {
    const breedCat = JSON.parse(body);
   // console.log(breedCat);
    if (error) {
      console.log("something went wrong");
      throw error;
    }
    console.log(breedCat[0].name);
    if (breedCat[0].name === breed[0]) {
      console.log(breedCat[0].description);
    } else {
      console.log(`breed not found`);
}
  });
};

module.exports = breedFetcher;*/
const request = require('request');
const url = "https://api.thecatapi.com/v1/breeds/search?q=";


const fetchBreedDescription = function(breedName, callback) {
  request(url + breedName, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);
    console.log(typeof data);
   
    if (breedName === data[0].name) {
      callback(null, data[0].description);
    } else {
      callback("No description for breed", null);
    }
  });
};

module.exports = fetchBreedDescription;