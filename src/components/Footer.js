import {useNavigate} from "react-router-dom";
import './scss/Footer.scss'
export const Footer = () => {

const navigate = useNavigate()

    return(
        <div className='footer'>
            <div className='footer_name'>
                2022 Xinhan Yang
            </div>
            <div className='footer_list'>
                <ul>
                    <li onClick={() => navigate('/about')}>
                        about
                    </li>
                    <li onClick={() =>navigate('/portfolio')}>
                        portfolio
                    </li>
                    <li onClick={() =>navigate('/contact')}>
                        contact
                    </li>
                </ul>
            </div>
        </div>
    )
}