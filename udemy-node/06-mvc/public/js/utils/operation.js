function getDetail(id) {
  window.location.href = `/product/${id}`;
}

function addToCart(id) {
  fetch('/cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      productId: id,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      window.location.href = `/cart`;
    });
}

function editProduct(id) {
  console.log('editProduct', id);
}

function removeProduct(id) {
  console.log('removeProduct', id);
}
