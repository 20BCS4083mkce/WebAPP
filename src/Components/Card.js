import { TeamMembers } from './teamMembers';
import './Card.scss';
export default function Card()
{
   return(
       <div className='Card'>
           {TeamMembers.map((member, index) => (
               <div className='Cardcontainer' key={index}>
                   <div>
                     <img src={member.image} alt={member.name} />
                   </div>
                   <div className='Bio-content'>
                       <p className='Name'>{member.name}</p>
                       <p className='Role'>{member.role}</p>
                       <p className='Description'>{member.description}</p>
                   </div>
                   <div>
                   <button>Contact</button>
                   </div>
               </div>
           ))}
       </div>
   );
}