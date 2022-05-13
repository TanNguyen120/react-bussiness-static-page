
import { SiGmail } from 'react-icons/si';
import { BsLinkedin } from 'react-icons/bs';

export default function LinkButton() {
    return (
        <div className="link-button">
            <button className="emailButton"> <SiGmail className='emailIcon' /> Email </button>
            <button className="linkedinButton"><BsLinkedin className='linkedinIcon' /> LinkedIn</button>
        </div>
    )
}