import Navbar from '../Components/Navbar';
import HomeImage from '../assets/HomeImage/HomeImage.png';
// import Project from "./Project";
// import About from "./About";
// import Contact from "./Contact";
import React from "react";
import './Home.scss'
export default function Home()
{
    return(
        <>
             <Navbar/>
             <div className='home'>
                 <img src={HomeImage} alt={HomeImage}/>
                 <div className='homeContent'>
                   <div className='logo'>BR</div>
                   <div className='architect'>Architects</div>
                 </div>
             </div>
             {/*/!*<Project/>*!/*/}
             {/*<About/>*/}
             {/*<Contact/>*/}

        </>
    );
};