const getSortedData = (productList, sortByPrice) => {
    if(sortByPrice === "HIGH_TO_LOW"){
      return(
        
        [...productList].sort((a,b) => Number(b.price) - Number(a.price))
      )
    }
    if(sortByPrice === "LOW_TO_HIGH"){
      return(
        [...productList].sort((a,b) => Number(a.price) - Number(b.price))
      )
    }
    return productList;
  }

  export {getSortedData}
