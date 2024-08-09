import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Simmer from "../Shimmer";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  let { id } = useParams();

  const [restaurant, setRestaurant] = useState({});
  const [desert, setDesert] = useState([]);
  const [item, setItem] = useState([]);
  // console.log(restaurant);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${id}`
    );
    const json = await data.json();
    console.log(json);
    console.log(json.data.cards);
    setRestaurant(json.data.cards[0].card.card?.info);
    
    
    let x = await json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards;
    console.log(x);
    let k = x.map((element) => {
      return element.card.card.itemCards;
    });
    let getItem1 = k[11]?.map((element) => {
      return element.card.info;
    });
    let getItem2 = k[1]?.map((element) => {
      return element.card.info;
    });
    setDesert(getItem1);
    setItem(getItem2);
    //    const { name, cuisines, costForTwoMessage } =
    //    json.data?.cards[0]?.card?.card?.info;
    //    console.log(name,cuisines,costForTwoMessage);
  }
  console.log(desert);
  console.log(item);
  
  
  const dispatch = useDispatch();

  const cartAddItemHandler = () =>{
    console.log("Fired");
    dispatch(addItem("grapes"));
  }

  const addFoodHandler = (arg) =>{
    dispatch(addItem(arg));
  }
  return (
    desert?.length == 0 && item?.length == 0 ? <Simmer/> :
    <>
      <div>
        <h1>This is my restaurant id: {id}</h1>
        <h1>{restaurant.name}</h1>
        <img
          height={"300rem"}
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            restaurant.cloudinaryImageId
          }
        />
        <h2>{restaurant.costForTwo}</h2>
        <div>
          <button onClick={()=>{cartAddItemHandler()}}>AddToCart</button>
        </div>
        {desert ? (
          <ol>
            <h2>Starter</h2>
            {desert?.map((element, index) => {
              return <li key={index}>{element.name}<button onClick={()=>addFoodHandler(element)}>Add</button></li>;
            })}
          </ol>
        ) : null}

        {item ? (
          <ol>
            <h2>Items</h2>
            {item?.map((element, index) => {
              return <li key={index}>{element.name}<button onClick={()=>addFoodHandler(element)}>Add</button></li>;
            })}
          </ol>
        ) : null}
      </div>
      <div></div>
    </>
  );
};
export default RestaurantMenu;











// let x = await json.data.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    // console.log(x);
    // let k = await x.map((element)=>{
    //     console.log(element?.card?.info?.name);
    // })
    
