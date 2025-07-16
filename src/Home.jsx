import React from "react";
import Header from "./Header";
import Service from "./Service";
import Category from "./Category";
import Newproducts from "./Newproducts";
import Designer from "./Designer.jsx";
import Popularproducts from "./Popularproducts.jsx";
import Comments from "./Comments.jsx";
import Blog from "./Blog.jsx";
import Mail from "./Mail.jsx";
import Footer from "./Footer.jsx";
import Brands from "./Brands.jsx";
const Home = () => {
    return(
<>
<Header/> 
<Service/>
<Category/>
<Newproducts/>
<Designer/>
<Popularproducts/>
<Comments/>
<Blog/>
<Brands/>
<Mail/>
<Footer/>
</>
    )
}

export default Home