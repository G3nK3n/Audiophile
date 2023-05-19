import React from "react";

import HomePage from './Home/Home';
import Footer from './Footer/Footer';
import Speakers_Lists from "./Speaker/Speakers_Lists";
import Earphones_Lists from "./Earphones/Earphones_Lists";
import Headphones_Lists from "./Headphones/Headphones_Lists";
import X99_Mark_II from "./Headphones/XX99_Mark_II/XX99_Mark_II";
import X99_Mark_I from "./Headphones/XX99_Mark_I/XX99_Mark_I";


import {Routes, Route} from 'react-router-dom';


const Layout = () => {
    return(
        <div>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/headphones" element={<Headphones_Lists />} />
                <Route exact path="/speakers" element={<Speakers_Lists />} />
                <Route exact path="/earphones" element={<Earphones_Lists />} />
                <Route exact path="/headphones/xx99MarkII" element={<X99_Mark_II />}/>
                <Route exact path="/headphones/xx99MarkI" element={<X99_Mark_I />}/>
            </Routes>
            <Footer />
        </div>
    )
}

export default Layout;