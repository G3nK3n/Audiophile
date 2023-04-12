import React from "react";
import SpeakersListsTitle from "./Speakers_Lists_Title";
import Speakers_Lists_MainBody from "./Speakers_Lists_MainBody";
import BottomSection from "../Home/BottomSection";

const Speakers_Lists = () => {
    return(
        <div>
            <SpeakersListsTitle />
            <Speakers_Lists_MainBody />
            <BottomSection />
        </div>
    )
}

export default Speakers_Lists;