import FireplaceIcon from '@mui/icons-material/Fireplace';
import {useNavigate} from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import './scss/Header.scss'
import BurgerHeader, {Navigate} from "./Iphone12/BurgerHeader";

export const Header = () => {

    const navigate = useNavigate()
    return (
        <div>

            <div className='Header'>
                <div className='Header_logo' onClick={() => navigate('/')}>
                    <FireplaceIcon className='size'/>
                </div>
                <div className='Header_content'>
                    <ul>
                        <li onClick={() => navigate('/about')}>
                            About

                            <svg className="bi bi-person-fill hover" width="2em" height="2em" viewBox="0 0 20 20"
                                 fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M5 16s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H5zm5-6a3 3 0 100-6 3 3 0 000 6z"
                                      clipRule="evenodd"/>
                            </svg>
                        </li>
                        <li onClick={() => navigate('/portfolio')}>
                            Portfolio
                            <svg className="bi bi-eye-fill hover" width="2em" height="2em" viewBox="0 0 20 20"
                                 fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.5 10a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
                                <path fillRule="evenodd"
                                      d="M2 10s3-5.5 8-5.5 8 5.5 8 5.5-3 5.5-8 5.5S2 10 2 10zm8 3.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
                                      clipRule="evenodd"/>
                            </svg>
                        </li>
                        <li onClick={() => navigate('/contact')}>
                            Contact
                            <svg className="bi bi-envelope-fill hover" width="2em" height="2em" viewBox="0 0 20 20"
                                 fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2.05 5.555L10 10.414l7.95-4.859A2 2 0 0016 4H4a2 2 0 00-1.95 1.555zM18 6.697l-5.875 3.59L18 13.743V6.697zm-.168 8.108l-6.675-3.926-1.157.707-1.157-.707-6.675 3.926A2 2 0 004 16h12a2 2 0 001.832-1.195zM2 13.743l5.875-3.456L2 6.697v7.046z"/>
                            </svg>
                        </li>
                    </ul>
                </div>
                <div className='Header_icons'>
                    <a href="https://www.linkedin.com/in/xinhan-yang-2b6938194/"><LinkedInIcon
                        className='iconSize' width='2rem' height='2rem'/></a>
                    <a href="https://www.instagram.com/abpooooo/"><InstagramIcon className='iconSize'/></a>
                    <a href="https://github.com/abpoooo"><GitHubIcon className='iconSize'/></a>
                </div>
            </div>

            <div className='burger'>

                <Navigate/>
            </div>
        </div>

    )

}