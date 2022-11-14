import logo from './logo.svg';
import './App.css';
import {BrowserRouter, HashRouter, Route, Routes, useLocation} from "react-router-dom";
import {Home} from "./components/Home";
import {About} from "./components/About";
import {Portfolio} from "./components/Portfolio";
import {Contact} from "./components/Contact";
import CityView from "./components/CityView/CityView";
import Swiper1 from "./components/Swiper1";
import BurgerHeader from "./components/Iphone12/BurgerHeader";

function App() {
    return (
        <div className="App">
            {/*<BrowserRouter>*/}
            {/*<HashRouter basename= '/Portfolio_Xinhan'>*/}
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/about' element={<About/>}></Route>
                    <Route path='/portfolio' element={<Portfolio/>}></Route>
                    <Route path='/contact' element={<Contact/>}></Route>
                    <Route path='/city' element={<CityView/>}></Route>
                    <Route path='/swipe' element={<Swiper1/>}></Route>
                    <Route path='/burger' element={<BurgerHeader/>}></Route>
                </Routes>
            {/*</HashRouter>*/}
            {/*</BrowserRouter>*/}
        </div>
    );
}

export default App;
