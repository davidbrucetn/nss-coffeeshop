const url = "https://localhost:5001/api/beanvariety/";

const buttonAllBeans = document.querySelector("#allbeans-button");
const buttonAllCoffees = document.querySelector("#allcoffees-button");

const buttonAddBean = document.querySelector("#addBean-button");
const buttonAddCoffee = document.querySelector("#addCoffee-button");

beanAPI.getAllBeans().then(populateBeansDropdown);
coffeeAPI.getAllCoffees().then(populateCoffeeDropdown);

buttonAddBean.addEventListener("click", () => {
  addBeanForm();
  beanCancel = document.querySelector("#cancelBeanButton");
  beanCancel.addEventListener("click", () => {
    previewBeans.innerHTML = "";
  });
  beanSave = document.querySelector("#saveBeanButton");

  beanSave.addEventListener("click", () => {
    beanAPI.addBean(buildBeanObject()).then(() => {
      beanAPI.getAllBeans().then((beanVarieties) => {
        generateBeansList(beanVarieties);
      });
    });
  });
});

buttonAllBeans.addEventListener("click", () => {
  beanAPI.getAllBeans().then((beanVarieties) => {
    generateBeansList(beanVarieties);
  });
});

buttonAllCoffees.addEventListener("click", () => {
  coffeeAPI.getAllCoffees().then((coffees) => {
    generateCoffeeList(coffees);
  });
});
