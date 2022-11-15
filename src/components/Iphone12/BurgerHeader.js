import { slide as Menu } from 'react-burger-menu'
import React, { Component } from 'react';
import home from '../../home22.png'
import './Css/Burger.scss'
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import {useNavigate} from "react-router-dom";




class BurgerHeader extends React.Component {
    showSettings (event) {
        event.preventDefault();
    }




    render () {
        // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
        return (
            <div className='burger'>

                <Menu right>
                    <a id="home" className="menu-item" href="/">Home    <img src="https://i.pinimg.com/originals/b9/e3/8c/b9e38cb331502265ced6a64c414dff3f.jpg" alt="" width='40px' height='40px'/></a>

                    <a id="about" className="menu-item" onClick={() => this.props.navigate('/about')} >About                     <svg className="bi bi-person-fill hover" width="2em" height="2em" viewBox="0 0 20 20"
                                                                                                     fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M5 16s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H5zm5-6a3 3 0 100-6 3 3 0 000 6z"
                              clipRule="evenodd"/>
                    </svg></a>

                    <a id="portfolio" className="menu-item" onClick={() => this.props.navigate('/portfolio')}>Portfolio                     <svg className="bi bi-eye-fill hover" width="2em" height="2em" viewBox="0 0 20 20"
                                                                                                                 fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 10a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
                        <path fillRule="evenodd"
                              d="M2 10s3-5.5 8-5.5 8 5.5 8 5.5-3 5.5-8 5.5S2 10 2 10zm8 3.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
                              clipRule="evenodd"/>
                    </svg></a>
                    <a id="contact" className="menu-item" onClick={() => this.props.navigate('/contact')}>Contact  <svg className="bi bi-envelope-fill hover" width="2em" height="2em" viewBox="0 0 20 20"
                                                                                        fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2.05 5.555L10 10.414l7.95-4.859A2 2 0 0016 4H4a2 2 0 00-1.95 1.555zM18 6.697l-5.875 3.59L18 13.743V6.697zm-.168 8.108l-6.675-3.926-1.157.707-1.157-.707-6.675 3.926A2 2 0 004 16h12a2 2 0 001.832-1.195zM2 13.743l5.875-3.456L2 6.697v7.046z"/>
                    </svg></a>
                    {/*<a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>*/}
                    <div className='icons'>
                        <a href="https://www.linkedin.com/in/xinhan-yang-2b6938194/"><LinkedInIcon
                            className='iconSize'/></a>
                        <a href="https://www.instagram.com/abpooooo/"><InstagramIcon className='iconSize'/></a>
                        <a href="https://github.com/abpoooo"><GitHubIcon className='iconSize'/></a>
                    </div>
                </Menu>

            </div>

        );
    }
}

export function Navigate(props){
    const navigate = useNavigate()

    return(<BurgerHeader navigate={navigate}></BurgerHeader>)
}

export default BurgerHeader