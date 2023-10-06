import house1 from '../assets/ProjectImage/house1.jpg';
import house2 from '../assets/ProjectImage/house2.jpg';
import house3 from '../assets/ProjectImage/house3.jpg';
import house4 from '../assets/ProjectImage/house4.jpg';
import './Image.scss';


const imageDescriptions = ['Summer House', 'Brick House','Renovated','Barn'];
const image1=[house1,house2,house3,house4];
const image2=[house2,house1,house4,house3];

export default function Image(Check) {
      const images = Check.props=== 'shuffle' ? image2 : image1;

    return (
        <>
            {images.map((image, index) => (
                <div className='Imagecontainer'>
                    <p key={index + 'p'}>{imageDescriptions[index]}</p>
                    <img key={index} src={image} alt={house1} />

                </div>
            ))}
        </>
    );
}
