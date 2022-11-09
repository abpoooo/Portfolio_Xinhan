import FireplaceIcon from '@mui/icons-material/Fireplace';
import {useNavigate} from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import './scss/Header.scss'

export const Header = () => {

    const navigate = useNavigate()
    return (
        <div className='Header'>
            <div className='Header_logo' onClick={() => navigate('/')}>
                <FireplaceIcon className='size'/>
            </div>
            <div className='Header_content'>
                <ul>
                    <li onClick={() => navigate('/about')}>
                        About
                    </li>
                    <li onClick={() =>navigate('/portfolio')}>
                        Portfolio
                    </li>
                    <li onClick={() =>navigate('/contact')}>
                        Contact
                    </li>
                </ul>
            </div>
            <div className='Header_icons'>
                <a  href="https://www.linkedin.com/in/xinhan-yang-2b6938194/"><LinkedInIcon className='iconSize'/></a>
                <a href="https://www.instagram.com/abpooooo/"><InstagramIcon className='iconSize'/></a>
                <a href="https://github.com/abpoooo"><GitHubIcon className='iconSize'/></a>
            </div>
        </div>
    )

}