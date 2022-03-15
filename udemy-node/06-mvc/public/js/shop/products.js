const productList = document.querySelector('.products');

productList.addEventListener('click', (event) => {
  const [target] = event.composedPath();
  if (target.dataset.type !== 'operation') {
    return;
  }

  const operation = target.dataset.operation;
  const productId = target.dataset.productId;

  switch (operation) {
    case 'detail':
      getDetail(productId);
      break;
    case 'cart':
      break;
    case 'edit':
      break;
    default:
      break;
  }
});

function getDetail(id) {
  window.location.href = `/product/${id}`;
}
