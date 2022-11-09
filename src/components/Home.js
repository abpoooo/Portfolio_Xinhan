import {Header} from "./Header";
import {Content} from "./Content";
import {Footer} from "./Footer";
import './scss/Home.scss'


export const Home = () => {
    return(
        <div className='Home'>
            <Header/>
            <div className='Home_Main'>
                <Content/>
            </div>
            <Footer/>
        </div>
    )
}