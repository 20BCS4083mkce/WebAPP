import Navbar from '../Components/Navbar';
import './About.scss';
import Card from '../Components/Card';
export default function About()
{
    return(
        <div className='About'>
            <Navbar/>
            <div>
                <div className='Heading'>About</div>
                <div className='content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                <div className='cardcontent'>
                    <Card></Card>
                </div>
            </div>
        </div>
    );
};