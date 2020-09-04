import React from "react";

const AddRestaurant = () => {
  return (
    <div>
      <form>
        <div>
          <div>
            <input type="text" placeholder="Name"></input>
          </div>
          <div>
            <input type="text" placeholder="Location"></input>
          </div>
          <div>
            <select>
              <option disabled>Price range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <button>ADD</button>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
