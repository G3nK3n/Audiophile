import React from "react";

import HomePage from './Home/Home';
import Footer from './Footer/Footer';

import Headphones_Lists from "./Headphones/Headphones_Lists";


const Layout = () => {
    return(
        <div>
            {/* <HomePage /> */}
            <Headphones_Lists />
            <Footer />
        </div>
    )
}

export default Layout;