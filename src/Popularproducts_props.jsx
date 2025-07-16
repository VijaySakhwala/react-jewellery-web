import React from "react";


const Popularproducts_props = (p) => {

    return (

        <>
            <div className="mouse-child1">
                <div className="mouse-img1">
                    <img src={p.img} alt="" />

                    <div className="mouse-icon">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <i className="fa-solid fa-heart"></i>
                        <i className="fa-solid fa-chart-simple"></i>
                    </div>
                </div>
                <div className="mouse-text1">
                    <a href="#">{p.product_name}</a>
                    <span>{p.price}</span>
                </div>
            </div>
        </>
    )


}
export default Popularproducts_props