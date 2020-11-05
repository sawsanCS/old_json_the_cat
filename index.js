
//const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed[0]}`;

const fetchBreedDescription = require('./breedFetcher.js');
const breedNameCat = process.argv.slice(2)[0];

fetchBreedDescription(breedNameCat, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});
