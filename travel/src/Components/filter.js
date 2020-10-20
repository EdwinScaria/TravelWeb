import React from "react";
import { useContext } from "react";
import { PlaceContext } from "../context";

// getting unique value
// so that places name i get is not repeating
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};
export default function RoomFilter({ places }) {
  const context = useContext(PlaceContext);
  const { handleChange, buildingName, type } = context;

  let types = getUnique(places, "type");

  types = ["All", ...types]; // unique value

  types = types.map((item, index) => {
    return (
      // sending the value to the content page // handle change
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  return (
    <section className="About-search">
      <div className="search">
        <form className="filter-form">
          <div className="form-group">
            <select
              name="type"
              id="type"
              value={type} // place type from databse - as if its a building or park etc
              className="form-control"
              onChange={handleChange}
            >
              {types}
            </select>
          </div>
        </form>
      </div>
    </section>
  );
}
