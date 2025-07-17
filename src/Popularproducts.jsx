import React from "react";
import Popularproducts_props from "./Popularproducts_props";
import Popularproductstwo_props from "./Popularproductstwo_props";


const Popularproducts = () => {

    return (
        <>




            <div className="mouse-outer">
                <div className="container">
                    <div className="mouse-heding">
                        <h2>
                            <span>Popular Products </span>
                        </h2>
                    </div>
                    <div className="mouse-inner">

                        <Popularproducts_props img={"/Images File/jewelryimg19.png"} product_name={"Expedita distinctio"} price={"$130.00"} />
                        <Popularproducts_props img={"/Images File/jewelryimg20.png"} product_name={"Voluptatem quia"} price={"$179.00"} />
                        <Popularproducts_props img={"/Images File/jewelryimg21.png"} product_name={"Facere possimus"} price={"$139.00"} />
                        <Popularproducts_props img={"/Images File/jewelryimg12.png"} product_name={"Aliquam quaerat"} price={"$199.00"} />

                        <Popularproductstwo_props img={"/Images File/jewelryimg22.png"} name={"Ratione voluptatem"} price={"$300.00"} />
                        <Popularproductstwo_props img={"/Images File/jewelryimg14.png"} name={"Tempora incidunt"} price={"$250.00"} />
                        <Popularproductstwo_props img={"/Images File/jewelryimg23.png"} name={"Iure incidunt"} price={"$280.00"} />
                        <Popularproductstwo_props img={"/Images File/jewelryimg13.png"} name={"Numquam eius modi"} price={"$230.00"} />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Popularproducts