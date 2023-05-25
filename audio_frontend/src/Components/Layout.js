import React, {useState} from "react";

import Headers from "./Header/Headers";
import HomePage from './Home/Home';
import Footer from './Footer/Footer';
import Speakers_Lists from "./Speaker/Speakers_Lists";
import Earphones_Lists from "./Earphones/Earphones_Lists";
import Headphones_Lists from "./Headphones/Headphones_Lists";
import X99_Mark_II from "./Headphones/XX99_Mark_II/XX99_Mark_II";
import X99_Mark_I from "./Headphones/XX99_Mark_I/XX99_Mark_I";
import XX59 from "./Headphones/XX59/XX59";
import YX1 from "./Earphones/YX1/YX1";
import ZX9 from "./Speaker/ZX9/ZX9";
import ZX7 from "./Speaker/ZX7/ZX7";

import Backdrop from './Backdrop/Backdrop';

import {Routes, Route} from 'react-router-dom';


const Layout = () => {


    const [openCart, setOpenCart] = useState(false);

    const openTheCart = () => {
        setOpenCart(!openCart);
    } 


    return(
        <div>
            {openCart ? <Backdrop /> : null}
            
            <Headers cart={openTheCart}/>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/headphones" element={<Headphones_Lists />} />
                <Route exact path="/speakers" element={<Speakers_Lists />} />
                <Route exact path="/earphones" element={<Earphones_Lists />} />
                <Route exact path="/headphones/xx99MarkII" element={<X99_Mark_II />}/>
                <Route exact path="/headphones/xx99MarkI" element={<X99_Mark_I />}/>
                <Route exact path="/headphones/xx59" element={<XX59 />}/>
                <Route exact path="/earphones/YX1" element={<YX1 />}/>
                <Route exact path="/speaker/ZX9" element={<ZX9 />}/>
                <Route exact path="/speaker/ZX7" element={<ZX7 />}/>
            </Routes>
            <Footer />
            
        </div>
    )
}

export default Layout;