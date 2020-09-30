const beanvarietyConverter = (beanvarietyObject) => {
  // Build string from array
  let notes = "";
  beanvarietyObject.notes === null
    ? (notes = "")
    : (notes = beanvarietyObject.notes);
  const beanvarietyHTMLRepresentation = `
      <section class="section__beanvariety">
          <div class="div__section__beanvariety">
              <h1>Name: ${beanvarietyObject.name}</h1>
              
          </div>
          <div class="div__section__details">

          <p>Notes:  ${notes}</p>
          <p>Region:  ${beanvarietyObject.region}</p>
      </div>
          
      </section>
  
      
      `;

  return beanvarietyHTMLRepresentation;
};
