const beansDropdown = document.getElementById("beans__dropdown");
const populateBeansDropdown = () => {
  beansDropdown.innerHTML = "";
  beansDropdown.innerHTML = `<option value="0A">Select a Bean Variety</option>`;
  beanVarietyCollection.forEach((beanObject) => {
    console.log(beanObject);
    return (beansDropdown.innerHTML += `<option value="${beanObject.id}">${beanObject.name}</option>`);
  });
};

beansDropdown.addEventListener("change", (clickEvent) => {
  clearBeansList();
  beanSelectedCollection = [];
  const beanID = parseInt(clickEvent.target.value);

  for (bean of beanVarietyCollection) {
    if (bean["id"] === beanID) {
      // If empty array and object not already in array, push it to the array
      if (beanSelectedCollection.length < 1) {
        beanSelectedCollection.push(bean);
      } else if (beanSelectedCollection.indexOf(bean) === -1) {
        beanSelectedCollection.push(bean);
      }
    }
  }

  displayBeansPreview(beanSelectedCollection);
});
const previewBeans = document.querySelector(".div__beans__display");
const clearBeansList = () => (previewBeans.innerHTML = "");

generateBeansList = (beansCollection) => {
  previewBeans.innerHTML = "";
  displayBeansPreview(beansCollection);
};

const displayBeansPreview = (beanSelectedCollection) => {
  for (const currBeanObject of beanSelectedCollection) {
    const beanHTML = beanvarietyConverter(currBeanObject);
    previewBeans.innerHTML += beanHTML;
  }
};

