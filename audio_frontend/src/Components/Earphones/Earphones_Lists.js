import React from "react";
import EarphonesListsTitle from "./Earphones_Lists_Title";
import Earphones_Lists_MainBody from "./Earphones_Lists_MainBody";
import BottomSection from "../Home/BottomSection";

const Earphones_Lists = () => {
    return(
        <div>
            <EarphonesListsTitle />
            <Earphones_Lists_MainBody />
            <BottomSection />
        </div>
    )
}

export default Earphones_Lists;