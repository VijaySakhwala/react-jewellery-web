import React from "react";
import Newproducts_props from "./Newproducts_props";


const Newproducts = () => {

    return (

        <>
            <div className="auto-outer">
                <div className="container">
                    <div className="auto-heding">
                        <h2>
                            <span>New Products </span>
                        </h2>
                    </div>
                    <div className="auto-inner">
                        <Newproducts_props img={"/Images File/jewelryimg13.png"} product_name={"Facere possimus"} price={"$140.00"} />
                        <Newproducts_props img={"/Images File/jewelryimg12.png"} product_name={"Numquam eius modi"} price={"$230.00"} />
                        <Newproducts_props img={"/Images File/jewelryimg14.png"} product_name={"Tempora incidunt"} price={"$250.00"} />
                        <Newproducts_props img={"/Images File/jewelryimg11.png"} product_name={"Reiciendis voluptatibus"} price={"$250.00"} />
                    </div>
                </div>
            </div>
        </>
    )

}

export default Newproducts