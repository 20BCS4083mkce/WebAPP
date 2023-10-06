import './Navbar.scss';
import Button from "./Button";



export default function Navbar()
{

    return(
        <div className="navbar">
            <div className="CompanyName">
                <Button  path="/"><b>BR</b> Architects</Button>
            </div>
            <div className="link">
            <Button path="/project">Project</Button>
            <Button  path="/about">About</Button>
            <Button  path="/contact">Contact</Button>
            </div>
        </div>
    );
}