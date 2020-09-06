import React, { useState, useContext } from "react";
import { createRestaurant } from "../apis/restaurants.api";
import { RestaurantsContext } from "../context/RestaurantsContext";

const AddRestaurant = () => {
  const { setRestaurants } = useContext(RestaurantsContext);

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("Price Range");

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name,
      location,
      price_range: parseInt(priceRange),
    };
    createRestaurant(payload).then((res) => {
      setRestaurants((restaurants) => [...restaurants, res.data.restaurant]);
      console.log("response after create restaurant: ", res);
    });
  };

  return (
    <div>
      <form>
        <div>
          <div>
            <input
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
              type="text"
              placeholder="Name"
            ></input>
          </div>
          <div>
            <input
              value={location}
              onChange={(e) => setLocation(e.currentTarget.value)}
              type="text"
              placeholder="Location"
            ></input>
          </div>
          <div>
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.currentTarget.value)}
            >
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <button type="submit" onClick={handleSubmit}>
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
