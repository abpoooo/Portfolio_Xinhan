import {Header} from "./Header";
import {Footer} from "./Footer";
import wp from '../assets/wallpaper.jpg';
import roll from '../rolling.gif'
import './scss/About.scss';
import ekko from '../ekko.jpg'

export const About = () => {


    return (
        <div className='AboutMe'>
            <Header/>
            <div className='AboutMe_Main'>
                <div className='AboutMe_Main_Left' id='intro-text'>
                    <h1>
                        About Me
                    </h1>
                    <h2 className='anim anim-typewriter2 anim-glow' >
                        I'm a <span className='select-me anim-oops'>Electrical Engineer </span> Full Stack Developer in Toronto
                    </h2>
                    <p align='middle'>
                        Since 2021,
                        <br/>
                        graduated from
                        Western University from Master of Engineering,
                        <br/>
                        I've enjoyed turning complex problems into simple,
                        <br/>
                        intuitive designs of frontend and backend.
                        <br/>
                        And joined Mark2Win as a full stack developer
                    </p>
                </div>
                <div className='AboutMe_Main_Right'>
                    <img src={roll} alt=""/>
                </div>


            </div>
            <div className='AboutMe_Bottom'>
                <div className='AboutMe_Bottom_Left'>
                    <img className='flash' src={ekko} alt="" />

                </div>
                <div className='AboutMe_Bottom_Right'>
                    <h3>
                        Random facts
                    </h3>
                    <p>
                        I drink a lot Starbucks
                        <br/>
                        I'm into interior design
                        <br/>
                        I love to cook (and eat)
                        <br/>
                        I want to live in Pandora
                        <br/>
                        I'm dreaming a lot of living after Z-virus world
                        <br/>
                        Ekko is my mentor
                        <br/>
                        I'm slightly addicted to League of Legends
                    </p>
                </div>

                {/*    carousel*/}
            </div>
            <Footer/>

        </div>


    )
}

// some other things