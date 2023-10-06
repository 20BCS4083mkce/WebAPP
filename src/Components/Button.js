import './Button.scss';
import {Link} from "react-router-dom";


export default function Button({path,children})
{


    return(

        <Link to={path}>{children}</Link>
    );
};