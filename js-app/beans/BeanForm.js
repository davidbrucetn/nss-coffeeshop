addBeanForm = () => {
  previewBeans.innerHTML = "";
  previewBeans.innerHTML = ` <form class="form__bean">
    <fieldset>
        <label for="beanName">Name: </label>
        <input type="text" id="beanName">
    </fieldset>
    <fieldset>
        <label for="notes">Notes: </label>
        <input type="text" id="notes">
    </fieldset>
    <fieldset>
        <label for="region">Region: </label>
        <input type="text" id="region">
    </fieldset>
    <div class="form__bean__buttons">
        <input type="button" id="cancelBeanButton" value="Cancel">
        <input type="button" id="saveBeanButton" value="Save">
    </div>
</form>
    
    `;
};

buildBeanObject = () => {
  let name = document.querySelector("#beanName").value;
  let notes = document.querySelector("#notes").value;
  let region = document.querySelector("#region").value;
  let beanObject = {
    name: name,
    notes: notes,
    region: region,
  };
  return beanObject;
};
