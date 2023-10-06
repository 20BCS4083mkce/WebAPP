import Navbar from '../Components/Navbar';
import Image from '../Components/Image';
import './Project.scss';
export default function Project()
{
    return(
        <div className='Project'>
            <Navbar/>
            <div>
               <div className='heading'>Projects</div>
                <div className='imageGallery'>
                   <div className='galleryfirst'>
                     <Image props='notshuffle'></Image>
                   </div>
                    <div className='gallerysecond'>
                      <Image props='shuffle'></Image>
                  </div>
                </div>
            </div>
        </div>
    );
};