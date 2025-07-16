import React from "react";
import Brand_props from "./Brands_props";


const Brands = () => {

    return (
        <>
            <div className="brand-outer">
                <div className="container">
                    <div className="brand-inner">

                        <Brand_props img={"images File/Jewelryimg31.jpg"} />
                        <Brand_props img={"images File/Jewelryimg29.jpg"} />
                        <Brand_props img={"images File/Jewelryimg30.jpg"} />
                        <Brand_props img={"images File/Jewelryimg32.jpg"} />
                        <Brand_props img={"images File/Jewelryimg29.jpg"} />
                    </div>
                </div>
            </div>


        </>
    )
}

export default Brands