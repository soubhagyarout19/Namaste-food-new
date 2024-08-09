import React from "react";

const Simmer = () =>{
    let arr = [{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10},{id:11},{id:12},{id:13},{id:14},{id:15},{id:16}];
    let x = arr.map((element)=>{
        return (
        <div className="shimmer-cards" key={element.id}>
        <div className="shimmer-image">

        </div>
        {/* <img alt="Resturnt Poster"/> */}
        <div className="shimmer-crousal-card-up">
            <h4></h4>
            <h4></h4>
        </div>
        <h4 className="shimmer-cuisine"></h4>
        </div>
        )
    })
    return(
        <div className="resturant-cards">
        {/* {console.log(x)} */}
            {x}
        </div>
    )

}

export default Simmer;