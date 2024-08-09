import React, { useEffect, useState } from "react";
import { restaurantList } from "./Constant";
import Cards from "./Card";
import Simmer from "./Shimmer";
import { SWIGGY_RES_API } from "./Constant";
import { Link } from "react-router-dom";
import useOnline from "./utils/useOnline";
import { filterData } from "./utils/Helper";

// function filterData(searchText, allResturants) {
//   let x = allResturants.filter((element) => {
//     return element.info.name.toLowerCase().includes(searchText.toLowerCase());
//   });
//   console.log(x);
//   return x;
// }

const Body = () => {
  const [allResturants, setAllResturants] = useState([]);
  const [filteredResturants, setFilteredResturants] = useState([]);
  const [searchText, setSearchText] = useState("");
  
  useEffect(() => {
    getResturants();
  }, []);

  async function getResturants() {
    try {
      const data = await fetch(SWIGGY_RES_API);
      const json = await data.json();
      // console.log(json.data.cards[1].card.card);
      // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
      // console.log(json.data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants);
      // setAllResturants(
      //   json?.data?.cards[5]?.card?.card.gridElements?.infoWithStyle
      //     ?.restaurants
      // );
      // setFilteredResturants(
      //   json?.data?.cards[5]?.card?.card.gridElements?.infoWithStyle
      //     ?.restaurants
      // );
      setAllResturants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
      setFilteredResturants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    } catch (error) {
      console.log("This is error " + error);
    }
  }

  const isOnline = useOnline();
  if(!isOnline){
    return <h1>🔴You are Currently Offline</h1>
  }
  if (!allResturants) return null;
  // if(filteredResturants.length === 0 ) return <h1>No Resturants Found</h1>
  return allResturants.length === 0 ? (
    <Simmer />
  ) : (
    <>
      <div className="search-bar">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        
        <button
          onClick={() => {
            const data = filterData(searchText, allResturants);
            setFilteredResturants(data);
          }}
        >
          Search
        </button>
      </div>
      
      <div className="resturant-cards">
        {filteredResturants.map((element) => {
          return <Link to={"/restaurant/" + element.info.id}  key={element.info.id} ><Cards {...element.info}/></Link>;
        })}
      </div>
    </>
  );
};

export default Body;
