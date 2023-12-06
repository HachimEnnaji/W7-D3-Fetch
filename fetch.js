fetch("https://striveschool-api.herokuapp.com/books")
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
  })
  .then((books) => {
    console.log(books);
    books.forEach((book) => {
      const row = document.getElementById("row");
      const card = document.createElement("div");
      card.innerHTML = `
        <div class="card h-100">
      <img src="${book.img}"  class="img-fluid" alt="book image" style="height: 410px">
      <div class="card-body">
        <h5 class="card-title" >${book.title}</h5>
        <p class="card-text">Price: ${book.price} € </p>
        <button type="submit" onclick="addCart(event)" class="btn btn-secondary w-100 my-2"><i class="bi bi-cart3"></i> Compra Ora</button>
        <button type="submit" onclick="deleteMe(event)" class="btn btn-danger w-100 my-1"> <i class="bi bi-trash3"></i>Scarta</button>
      </div>
    </div>
    `;
      // onclick="deleteMe(event)"
      row.appendChild(card);
    });
  })
  .catch((error) => console.log(error));

const deleteMe = (event) => {
  const book = event.target.closest(".card");
  book.parentNode.remove();
};
const addCart = (event) => {
  const book = event.target.closest(".card");
  const title = book.querySelector("h5").innerText;
  const price = book.querySelector("p").innerText;

  const cart = document.getElementById("cart");
  const product = document.createElement("div");
  product.innerHTML = `
  <ul class="list-unstyled border border-dark-subtle rounded-2 ">
    <li class="fw-bold">${title}</li>
    <li class="text-warning fw-bold bg-dark rounded-2">${price}</li>
  </ul>
  `;
  cart.appendChild(product);
};
{
}
