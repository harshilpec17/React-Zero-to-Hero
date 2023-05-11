import restObj from "../utils/mockData";
import Card from "./Card";
import { useState } from "react";

const Body = () => {
  const [newList, setNewList] = useState(restObj);
  return (
    <>
      <div className="filter-btn">
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
          className="btn"
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
      <div className="container">
        {newList.map((rest) => (
          <Card key={rest.info.id} restData={rest} />
        ))}
      </div>
    </>
  );
};

export default Body;
