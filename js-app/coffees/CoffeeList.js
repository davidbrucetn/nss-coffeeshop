const coffeeDropdown = document.getElementById("coffee__dropdown");
const previewCoffees = document.querySelector(".div__coffee__display");

const populateCoffeeDropdown = () => {
  coffeeDropdown.innerHTML = "";
  coffeeDropdown.innerHTML = `<option value="0A">Select a Coffee</option>`;
  coffeeCollection.forEach((coffeeObject) => {
    console.log(coffeeObject);
    return (coffeeDropdown.innerHTML += `<option value="${coffeeObject.id}">${coffeeObject.title}</option>`);
  });
};

coffeeDropdown.addEventListener("change", (clickEvent) => {
  clearCoffeeList();
  coffeeSelectedCollection = [];
  const coffeeID = parseInt(clickEvent.target.value);

  for (coffee of coffeeCollection) {
    if (coffee["id"] === coffeeID) {
      // If empty array and object not already in array, push it to the array
      if (coffeeSelectedCollection.length < 1) {
        coffeeSelectedCollection.push(coffee);
      } else if (coffeeSelectedCollection.indexOf(coffee) === -1) {
        coffeeSelectedCollection.push(coffee);
      }
    }
  }

  displayCoffeesPreview(coffeeSelectedCollection);
});

const clearCoffeeList = () => (previewCoffees.innerHTML = "");

generateCoffeeList = (coffeeCollection) => {
  previewCoffees.innerHTML = "";
  displayCoffeesPreview(coffeeCollection);
};

const displayCoffeesPreview = (coffeeSelectedCollection) => {
  previewCoffees.innerHTML = "";
  for (const currCoffeeObject of coffeeSelectedCollection) {
    const coffeeHTML = coffeeConverter(currCoffeeObject);
    previewCoffees.innerHTML += coffeeHTML;
  }
};
