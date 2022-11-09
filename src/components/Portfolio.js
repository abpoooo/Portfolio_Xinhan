import {Header} from "./Header";
import {Footer} from "./Footer";
import lulu from '../assets/Lulu.jpg'
import './scss/Portfolio.scss';
import lululemon from '../assets/Lululemon.jpg';
import city from '../assets/city.jpg';
import music from '../assets/Music.jpg'
import {useNavigate} from "react-router-dom";

export const Portfolio = () => {

    const navigate = useNavigate()
    return(
        <div className='Portfolio'>
            <Header/>
            <div className='Portfolio_Main'>
                <div className='Portfolio_Main_Top'>
                    <div className='Portfolio_Main_Top_Left'>
                        <h1>
                            Xinhan Yang's Portfolio
                        </h1>
                        <h2>
                            Check out some of my latest project design case studies
                        </h2>
                        <p>
                            I've worked at Mark2Win IT group and anticipated some of the projects
                            <br/>
                            And some of my Projects are shown below
                        </p>
                    </div>

                    <div className='Portfolio_Main_Top_Right'>
                        <img src={lulu} alt=""/>
                    </div>
                </div>
                <div className='Portfolio_Main_Bottom'>

                    <div className='Portfolio_Main_Bottom_City' onClick={() => navigate('/city')}>
                        <img src={city} alt=""/>
                        <p>
                            CityView Selection with Carousel
                        </p>
                    </div>
                    <div className='Portfolio_Main_Bottom_Music'>
                        <img src={music} alt=""/>
                        <p>
                            Music Store selection into Fav and Play lists
                        </p>
                    </div>
                    <div className='Portfolio_Main_Bottom_LuLu'>
                        <img src={lululemon} alt=""/>
                        <p>
                            Lululemon similar E-Commerce website with stripe Checkout
                            <br/>
                            and Backend Database of Orders and Payments
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )

}

// latest work which is the project