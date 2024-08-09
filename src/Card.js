const Cards =({cloudinaryImageId,name,avgRating,cuisines})=>{
    // console.log(props);
    // let x = props.resturant.info;
    // console.log(x);
    return(
        <div className="cards">
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="Resturnt Poster"/>
        <div className="crousal-card-up">
            <h4>{name}</h4>
            <h4>{avgRating}</h4>
        </div>
        <h4>{cuisines.join(", ")}</h4>
        </div>
    )
}

export default Cards;