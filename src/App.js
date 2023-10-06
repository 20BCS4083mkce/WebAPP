import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from '../src/pages/Home';
import Project from '../src/pages/Project';
import About from '../src/pages/About';
import Contact from '../src/pages/Contact';

export default function app()
{
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/project" element={<Project/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </BrowserRouter>


        </>
    )
}

