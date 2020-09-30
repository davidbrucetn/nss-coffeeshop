let beanVarietyCollection = [];

const beanAPI = {
  getAllBeans() {
    let repos = "beanvariety";
    const URL = helperFunctions.getURL() + repos;
    return fetch(URL)
      .then((resp) => resp.json())
      .then(
        (arrayOfBeanVarieties) => (beanVarietyCollection = arrayOfBeanVarieties)
      );
  },
  addBean(beanObject) {
    let repos = "beanvariety";
    const URL = helperFunctions.getURL() + repos;
    return fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(beanObject),
    }).then((response) => response.json);
  },
};
