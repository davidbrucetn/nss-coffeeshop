let repos = "coffee";
let coffeeCollection = [];
let coffeeSelectedCollection = [];

const coffeeAPI = {
  getAllCoffees() {
    const repos = "coffee";
    const URL = helperFunctions.getURL() + repos;
    console.log(`URL: ${URL}`);
    return fetch(URL)
      .then((resp) => resp.json())
      .then((arrayOfCoffees) => (coffeeCollection = arrayOfCoffees));
  },
};
