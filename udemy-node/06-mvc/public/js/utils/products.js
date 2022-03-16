(function () {
  const productList = document.querySelector('.products');

  if (!productList) return;

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
        addToCart(productId);
        break;
      case 'edit':
        editProduct(productId);
        break;
      case 'remove':
        removeProduct(productId);
        break;
      default:
        break;
    }
  });
})();
