import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="first-header-outer">
                    <div className="container">
                        <div className="first-header-inner">

                            <div className="first-header-child1">
                                <div className="first-header-text1">
                                    <span>ind</span>

                                    <strong>english</strong>
                                </div>
                            </div>

                            <div className="first-header-child2">
                                <div className="first-header-text2">
                                    <ul>
                                        <li><a href="#">Default welcome msg!</a></li>
                                        <li><a href="#">MY ACCOUNT</a></li>
                                        <li><a href="#">MY WISH LIST</a></li>
                                        <li><Link to={"/signin"}>SIGN IN </Link></li>
                                    </ul>  

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="header-outer">
                    <div className="container">
                        <div className="data-inner">

                            <div className="data-child1">
                                <div className="logo-img">
                                    <img src="images File/logo.png" alt="" />
                                </div>
                            </div>


                            <ul className="data-menu-child2">
                                <li className="menu-color"><Link to={"/"}>HOME</Link></li>
                                <li className="sub-icon"><a href="#">SALE</a>
                                    <ul className="data-sub">
                                        <li><Link to={"/ring"}>RING</Link></li>
                                        <li><Link to={"/bracelets"}>BRACELETS</Link></li>
                                        <li><Link to={"/earrings"}>EARRINGS </Link></li>
                                        <li><a href="#">NACKLACES</a></li>
                                    </ul>
                                </li>
                                <li className="sub-icon1"><a href="#">22 CARATGOLD</a>
                                    <ul className="data-sub1">
                                        <li><a href="#">DIAMOND</a></li>
                                        <li><a href="#">
                                            CHAIN
                                        </a></li>
                                        <li><a href="#">KADAS</a></li>
                                        <li><a href="#">
                                            PENDANT SET
                                        </a></li>
                                    </ul>
                                </li>
                                <li><a href="#">24 CARATGOLD</a></li>
                                <li><a hhref="#">CONTECT US</a></li>
                                <p>new</p>
                                <span>HOT</span>
                            </ul>

                            <div className="data-child3">

                            </div>



                            <div className="data-child4">
                                <div className="cart">


                                    <div className="text">
                                        <a href="#">MYCART</a>
                                        <p>0 items</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>




                <div className="view-outer">
                    <div className="container">
                        <div className="view-inner">

                            <div className="view-child1">
                                <div className="text1">
                                    <h5>UP TO 20% OFF</h5>
                                    <h2>COOL EARRINGS</h2>
                                    <h4><span>In </span>Store</h4>

                                </div>
                                <a href="#">SHOP NOW</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Header

