const CartCard = ({id,name,imageId,price}) =>{
    console.log(id,name,imageId,price);
    return(
        <>
        <div className="cards">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + imageId} alt="Resturnt Poster"/>
            <h3>{name}</h3>
            <h3>{price}</h3>
        </div>
        </>
    )
}

export default CartCard;