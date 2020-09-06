import React, { useState, useEffect, useContext } from "react";

import { RestaurantsContext } from '../context/RestaurantsContext';

const BASE_URL = "http://localhost:8080/api/v1/restaurants";

const fetchSettings = {
  method: 'POST', // *GET, POST, PUT, DELETE, etc.
  mode: 'cors', // no-cors, *cors, same-origin
  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  credentials: 'same-origin', // include, *same-origin, omit
  headers: {
    'Content-Type': 'application/json'
  },
  redirect: 'follow', // manual, *follow, error
  referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  // body: JSON.stringify(data) // body data type must match "Content-Type" header
}

const getBodyObject = (data) => ({
  ...fetchSettings,
  body: JSON.stringify(data)
})


// export default function restaurantsAPI(path = "") {
//   return fetch(`${BASE_URL}${path}`);
// }


export function useFetch(path = "") {
  // const [restaurants, setRestaurants] = useState([]);
  const {restaurants, setRestaurants} = useContext(RestaurantsContext);
  

  useEffect(() => {
    fetch(`${BASE_URL}${path}`)
      .then((res) => res.json())
      .then((res) => {
        console.log("data res: ", res);
        // setRestaurants([...res.data.restaurant]);
        setRestaurants(res.data.restaurant);
      })
      .catch((error) => {
        console.log("Error fetching data: ", error);
      });
  }, [path]);

  return restaurants;
}


export async function createRestaurant(data = {}) {
  // const {restaurants, setRestaurants} = useContext(RestaurantsContext);
  const response = await fetch(BASE_URL, getBodyObject(data));
  // setRestaurants(restaurants => ([...restaurants, response.json()]))
  return response.json(); // parses JSON response into native JavaScript objects
}
