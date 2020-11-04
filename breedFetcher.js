const request = require('request');
const breed = process.argv.slice(2);
//console.log(breed[0]);
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed[0]}`;
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