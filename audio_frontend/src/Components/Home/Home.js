import React from "react";

import MainBody from "./MainBody";
import ItemLists from "./ItemLists";
import BottomSection from './BottomSection';

const Home = () => {
    return(
        <div>
            <MainBody />
            <ItemLists />
            <BottomSection />
        </div>
    )
}

export default Home;