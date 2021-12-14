const c = (lu) =>document.querySelector(lu);
const cs = (lu) =>document.querySelectorAll(lu);

pizzaJson.map((item, index) => {
  let pizzaItem = c('.models .pizza-item').cloneNode(true);

  c('.pizza-area').append(pizzaItem);

});