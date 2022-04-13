import { useProduct } from "../../context/product-context";

export default function Sidebar() {
  const {state, dispatch} = useProduct(); 
  const {sortByPrice, sortByRating, categories : {Anjunadeep, Anjunabeats, Above_And_Beyond, Posters, CDs, ShowAll} }  = state;

  return (
    <aside>
      <div className="sidebar flex_c">
        <div className="container-one flex_r">
          <h3>Filter</h3>
          <h4>
            <u className="clearFilter"
            onClick={()=>dispatch({type:"CLEAR_FILTERS"})}>Clear Filters</u>
          </h4>
        </div>

        <div className="container-three flex_c">
          <h3>Category</h3>
          <span>
            <input id="anjunadeep" type="checkbox" 
            onChange={()=> dispatch({type:"ANJUNADEEP"})}
            checked={Anjunadeep} />{" "}
            <label for="anjunadeep">Anjunadeep</label>{" "}
          </span>
          <span>
            <input id="anjunabeats" type="checkbox"
            onChange={()=> dispatch({type:"ANJUNABEATS"})}
            checked={Anjunabeats} />{" "}
            <label for="anjunabeats">Anjunabeats</label>{" "}
          </span>
          <span>
            <input id="above-and-beyond" type="checkbox"
            onChange={()=> dispatch({type:"ABOVE_AND_BEYOND"})}
            checked={Above_And_Beyond} />{" "}
            <label for="above-and-beyond">Above & Beyond</label>{" "}
          </span>
          <span>
            <input id="posters" type="checkbox"
            onChange={()=> dispatch({type:"POSTERS"})}
            checked={Posters} />{" "}
            <label for="posters">Posters</label>{" "}
          </span>
          <span>
            <input id="cds" type="checkbox"
            onChange={()=> dispatch({type:"CDS"})}
            checked={CDs} />{" "}
            <label for="cds">CDs</label>{" "}
          </span>
        </div>
        <div className="input-container flex_c">
          <h3>Rating</h3>
          <div className="radio-btns flex_c">
            <span>
              <input id="four-star" type="radio" name="rating" value="4+"
              onChange={() => dispatch({type: "RATINGS", 
              payload: "FOUR_PLUS"})}
              checked={sortByRating === "FOUR_PLUS"} />{" "}
              <label for="four-star">4 stars & above</label>
            </span>
            <span>
              <input id="three-star" type="radio" name="rating" value="3+" 
              onChange={() => dispatch({type: "RATINGS", 
              payload: "THREE_PLUS"})}
              checked={sortByRating === "THREE_PLUS"}/>{" "}
              <label for="three-star">3 stars & above</label>
            </span>
            <span>
              <input id="two-star" type="radio" name="rating" value="2+" 
              onChange={() => dispatch({type: "RATINGS", 
              payload: "TWO_PLUS"})}
              checked={sortByRating === "TWO_PLUS"}/>{" "}
              <label for="two-star">2 stars & above</label>
            </span>
            <span>
              <input id="one-star" type="radio" name="rating" value="1+" 
              onChange={() => dispatch({type: "RATINGS", 
              payload: "ONE_PLUS"})}
              checked={sortByRating === "ONE_PLUS"}/>{" "}
              <label for="one-star">1 stars & above </label>
            </span>
          </div>
        </div>
        <div className="input-container flex_c">
          <h3>Sort By</h3>
          <div className="radio-btns flex_c">
            <span>
              <input
                type="radio"
                id="high-to-low"
                name="pricefilter"
                value="low-to-high"
                onChange={() =>
                  dispatch({ type: "SORT", payload: "HIGH_TO_LOW" })
                }
                checked={sortByPrice === "HIGH_TO_LOW"}
              />{" "}
              <label for="high-to-low">Price - High to Low</label>{" "}
            </span>
            <span>
              <input
                type="radio"
                id="low-to-high"
                name="pricefilter"
                value="low-to-high"
                onChange={() =>
                  dispatch({ type: "SORT", payload: "LOW_TO_HIGH" })
                }
                checked={sortByPrice === "LOW_TO_HIGH"}
              />{" "}
              <label for="low-to-high">Price - Low to High</label>
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
