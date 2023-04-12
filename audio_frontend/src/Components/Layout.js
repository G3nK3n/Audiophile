import React from "react";

import HomePage from './Home/Home';
import Footer from './Footer/Footer';
import Speakers_Lists from "./Speaker/Speakers_Lists";
import Earphones_Lists from "./Earphones/Earphones_Lists";
import Headphones_Lists from "./Headphones/Headphones_Lists";


const Layout = () => {
    return(
        <div>
            {/* <HomePage /> */}
            {/* <Headphones_Lists /> */}
            {/* <Speakers_Lists /> */}
            <Earphones_Lists />
            <Footer />
        </div>
    )
}

export default Layout;