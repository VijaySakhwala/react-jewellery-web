import React from "react";

const Popularproductstwo_props = (ptwo) => {

    return (
        <>
            <div className="mouse-child2">
                <div className="mouse-img2">
                    <img src={ptwo.img} alt="" />
                    <div className="mouse-icon">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <i className="fa-solid fa-heart"></i>
                        <i className="fa-solid fa-chart-simple"></i>
                    </div>
                </div>
                <div className="mouse-text2">
                    <a href="#">{ptwo.name}</a>
                    <span>{ptwo.price}</span>
                </div>
            </div>

        </>
    )
}

export default Popularproductstwo_props