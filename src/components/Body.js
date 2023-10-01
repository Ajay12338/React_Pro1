import swiggy_obj from "../utils/api_data";
import Card from "./Card";
import { useState } from "react";

const Body = () => {
  let filter_arr;
  const [restaurantData, setRestaurantData] = useState(
    swiggy_obj.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
  );
  const [toggle_flag, setToggleFlag] = useState(true);
  return (
    <div id="body">
      <div id="search-box">
        <input type="text" />
        <button
          className={toggle_flag ? "filter-btn" : "filter-btn-change"}
          onClick={() => {
            if (toggle_flag) {
              filter_arr = restaurantData.filter((curr) => {
                return curr.info.avgRating >= 4;
              });
            } else {
              filter_arr =
                swiggy_obj.data.cards[2].card.card.gridElements.infoWithStyle
                  .restaurants;
            }
            setRestaurantData(filter_arr);
            setToggleFlag(!toggle_flag);
          }}
        >
          Filter By High rating
        </button>
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
