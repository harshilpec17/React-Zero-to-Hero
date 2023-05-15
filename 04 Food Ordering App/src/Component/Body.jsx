import restObj from "../utils/mockData";
import Card from "./Card";
import { useState } from "react";

const Body = () => {
  const [newList, setNewList] = useState(restObj);
  const [typedText, setTypedText] = useState("");
  return (
    <>
      <div className="wrapper">
        <div className="filter-btns">
          <button
            className="btn"
            onClick={() => {
              const topRated = newList.filter((x) => x.info.avgRating > 4);
              setNewList(topRated);
            }}
          >
            Top Rated Restaurants
          </button>
          <button
            className="btn fasterDelivery"
            onClick={() => {
              const fastDelivery = newList.filter(
                (x) => x.info.sla.deliveryTime < 28
              );
              setNewList(fastDelivery);
            }}
          >
            Faster Delivery
          </button>
        </div>
        <div className="searchBar">
          <input
            type="search"
            id="searchBar"
            placeholder="Find a Spot"
            value={typedText}
            onChange={(text) => setTypedText(text.target.value)}
          />
          <button
            className="btn"
            onClick={() => {
              const search = newList.filter((text) => { for(i = 0; i < text.info.name.length; i++){
                if(text.info.name[i].toLowerCase == typedText.toLowerCase)
                return text;
              }
              
              });
              setNewList(search);
              console.log(search);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="container">
        {newList.map((rest) => (
          <Card key={rest.info.id} restData={rest} />
        ))}
      </div>
    </>
  );
};

export default Body;
