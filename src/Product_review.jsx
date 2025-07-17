import React from "react";
import Prodct_review_props from "./Product_review_props";


const Prodct_review = () => {
    return (

        <>
            <div className="item-outer">
                <div className="container">
                    <div className="item-inner">
                        <div className="item-child1">
                            <div className="item-shop">
                                <span>shop by</span>
                                <div className="price">
                                    <strong>price</strong>
                                    <p><a href="#">$100.00 - $199.99 (5)</a></p>
                                    <p><a href="#">$200.00 - $299.99 (5) </a></p>
                                    <p><a href="#">$300.00 and above (2)</a></p>
                                </div>
                            </div>

                            <div className="item-wishlist">
                                <span>my wish list</span>
                                <div className="wishlist">
                                    <p>You have no items in your wish list.</p>
                                </div>
                            </div>
                        </div>
                        <div class="item-child2">
                            <div className="item-men">
                                <div className="heding">
                                    <span>men</span>
                                </div>
                            </div>
                            <div className="item-change">
                                <div className="item-grid-icon">
                                </div>

                                <div className="item-text">
                                    <span>Items 1-9 of 12
                                    </span>
                                </div>
                                <div className="item-short">
                                    <span>Short by
                                    </span>
                                </div>
                                <select className="item-short-by">
                                    <option value="postion">Postion</option>
                                    <option value="product name">Product name</option>
                                    <option value="price">price</option>
                                </select>
                            </div>
                            <div className="item-prodct">

                                <Prodct_review_props img={"images File/jewelryimg22.png"} name="Occaecati cupiditate" price="$339.00" />
                                <Prodct_review_props img={"images File/jewelryimg11.png"} name="Occaecati cupiditate" price="$339.00" />
                                <Prodct_review_props img={"images File/jewelryimg12.png"} name="Occaecati cupiditate" price="$339.00" />
                                <Prodct_review_props img={"images File/jewelryimg20.png"} name="Occaecati cupiditate" price="$339.00" />
                                <Prodct_review_props img={"images File/jewelryimg21.png"} name="Occaecati cupiditate" price="$339.00" />
                                <Prodct_review_props img={"images File/jewelryimg22.png"} name="Occaecati cupiditate" price="$339.00" />
                                <Prodct_review_props img={"images File/jewelryimg23.png"} name="Occaecati cupiditate" price="$339.00" />
                                <Prodct_review_props img={"images File/jewelryimg14.png"} name="Occaecati cupiditate" price="$339.00" />
                                <Prodct_review_props img={"images File/jewelryimg19.png"} name="Occaecati cupiditate" price="$339.00" />

                            </div>

                            <div className="item-next-page">
                                <div className="next-page">

                                    <a href="#"><span>1</span></a>
                                    <a href="#"><span>2</span></a>
                                    <a href="#" class="left-icon"></a>

                                </div>
                                <div className="item-show">
                                    <span>Show</span>
                                    <select className="item-show-menu">
                                        <option value="9">9</option>
                                        <option value="9">15</option>
                                        <option value="9">30</option>
                                    </select>
                                    <strong>per page</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Prodct_review