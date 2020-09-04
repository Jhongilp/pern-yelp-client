import React from "react";

const RestaurantList = () => {
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
        <tr>
          <td>Restaurant 1</td>
          <td>New York</td>
          <td>$$$</td>
          <td>4.0</td>
          <td>
            <button>EDIT</button>
          </td>
          <td>
            <button>DELETE</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default RestaurantList;
