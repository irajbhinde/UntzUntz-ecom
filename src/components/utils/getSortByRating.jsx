const getSortByRatingData = (productList, sortByRating) => {
    if(sortByRating === "FOUR_PLUS"){
        return(
            
            [...productList].filter((product) => product.rating > 4)
        )
    }
    if(sortByRating === "THREE_PLUS"){
        
        return(
            [...productList].filter((product) => product.rating > 3)
        )
    }
    if(sortByRating === "TWO_PLUS"){
        return(
            [...productList].filter((product) => product.rating > 2)
        )
    }
    if(sortByRating === "ONE_PLUS"){
        return(
            [...productList].filter((product) => product.rating > 1)
        )
    }
    return productList;
}

export {getSortByRatingData}