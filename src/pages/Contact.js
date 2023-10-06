import Navbar from '../Components/Navbar';
import './Contact.scss'
import map from '../assets/ContactImage/map.jpg'

export default function Contact()
{
    return(
        <div className='Contact'>
            <Navbar/>
            <div>
                <div className='Heading'>Contact</div>

                <form>
                    <label>Lets get in touch and talk about your next project.</label>
                    <input type="text" name="title" placeholder='Name'  required/>
                    <input type="email" name="title" placeholder='Email'  required/>
                    <input type="text" name="title" placeholder='Subject' required/>
                    <input type="text" name="title" placeholder='Comment' required/>
                    <button type="submit">Send Message</button>
                </form>
                <img src={map} alt={map}/>
                <div className='Developer-name'>
                    Developed by Santhosh
                </div>
            </div>
        </div>
    );
};