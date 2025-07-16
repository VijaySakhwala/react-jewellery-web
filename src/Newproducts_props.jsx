import React from "react";


const Newproducts_props = (a) =>{

    return(
        <>
        <div className="auto-child1">
                <div className="auto-img1">
                    <img src= {a.img} alt="" />

                    <div className="auto-icon">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <i className="fa-solid fa-heart"></i>
                        <i className="fa-solid fa-chart-simple"></i>
                    </div>
                </div>
                <div className="auto-text1">
                    <a href="#">{a.product_name}</a>
                    <span>{a.price}</span>
                </div>
            </div>
        </>
    )
}

export default Newproducts_props