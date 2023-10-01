import swiggy_obj from "../utils/api_data";
import Card from "./Card";
import { useState } from "react";

const Body = () => {
  const [restaurantData, setRestaurantData] = useState(
    swiggy_obj.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
  );
  const [inputData, setInputData] = useState("");
  return (
    <div id="body">
      <div id="search-box">
        <input type="text" />
        <button>search</button>
      </div>
      <div className="cards">
        {restaurantData.map((val, index) => {
          return (
            <Card
              key={val.info.id}
              image_src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                val.info.cloudinaryImageId
              }
              name={val.info.name}
              cuisines={val.info.cuisines}
              ratings={val.info.avgRating}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
