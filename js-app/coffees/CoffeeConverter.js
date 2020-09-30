const coffeeConverter = (coffeeObject) => {
  // Build string from array
  let notes = "";
  coffeeObject.beanVariety.notes === null
    ? (notes = "")
    : (notes = coffeeObject.beanVariety.notes);

  const coffeeHTMLRepresentation = `
    <section class="section__coffee">
        <div class="div__section__coffee">
            <h1>Title: ${coffeeObject.title}</h1>
        </div>
        <div class="div__section__details">
            <h5>Bean Variety</h5>
            <p>Name:  ${coffeeObject.beanVariety.name}</p>
            <p>Notes:  ${notes}</p>
            <p>Region:  ${coffeeObject.beanVariety.region}</p>
        </div>
        
    </section>

    
    `;

  return coffeeHTMLRepresentation;
};
