// import React, { useEffect } from "react";
import React from "react";
// import { getAllRestaurants } from "../apis/restaurants.api";
import { useFetch } from "../apis/restaurants.api";

const RestaurantList = () => {
  const restaurants = useFetch();
  console.log("[render] restaurants: ", restaurants);

  return (
    <table>
      <thead>
        <tr>
          <th>Restaurant</th>
          <th>Location</th>
          <th>Price Range</th>
          <th>Ratings</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {restaurants.map((restaurant) => (
          <tr key={`${restaurant.id}`}>
            <td>{restaurant.name}</td>
            <td>{restaurant.location}</td>
            <td>{"$".repeat(restaurant.price_range)}</td>
            <td>4.0</td>
            <td>
              <button>EDIT</button>
            </td>
            <td>
              <button>DELETE</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RestaurantList;
