const getFilteredData = (productList, categories) => {
  if (Object.values(categories).every((categories) => categories === false)){
    return productList;
}
  return productList.filter(
    (product) => categories[product.categoryName]
  );
};

export { getFilteredData }
