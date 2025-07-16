import React from "react";



const Prodct_review_props = (p_review) => {
    return (

        <>

            <div className="item1">
                <img src={p_review.img} alt="" />
                <div className="item-prodct-text">
                    <a href="#">
                        <p>{p_review.name}</p>
                    </a>
                    <span>{p_review.price}</span>
                </div>
            </div>
        </>
    )
}

export default Prodct_review_props