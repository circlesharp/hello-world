function handleProducts(config) {
  const { deletePaths = [] } = config;

  console.log(`deleting: ${String(deletePaths)}`);
}

module.exports = { handleProducts };
