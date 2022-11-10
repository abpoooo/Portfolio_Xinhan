// import '../me.jpg'
import me from "../assets/me.jpg"
import {useEffect, useState, useMemo, useRef} from "react";
import * as THREE from 'three'
import {Canvas, useFrame} from '@react-three/fiber'
import {Text, TrackballControls} from '@react-three/drei'
import Collapse from '@material-ui/core/Collapse';

import {makeStyles} from '@material-ui/core/styles';
import React from 'react';
import clsx from 'clsx';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import {useNavigate} from "react-router-dom";
import './scss/Content.scss'
import {FaAngleUp} from 'react-icons/fa';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import TagCloud from "TagCloud";
// import {TagCloud} from 'react-tagcloud'
import randomColor from 'randomcolor';
import randomWord from 'random-words'


export const Content = () => {

    //left side intro
    // middle my photo
    // right side a list of collapse -> my projects my resume, email icons
    //bottom send me a message
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({...state, [anchor]: open});
    };

    const navigate = useNavigate()

    // scroll
    const [showTopBtn, setShowTopBtn] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, [])
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    const goToSecond = () => {
        window.scrollTo({})
    }
    //
    const list = (anchor) => (
        <div

            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List onClick={() => navigate('/about')}>
                {['About'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{<InboxIcon/>}</ListItemIcon>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))}
            </List>
            <List onClick={() => navigate('/portfolio')}>
                {['Portfolio'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{<WorkOutlineIcon/>}</ListItemIcon>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))}
            </List>

            <List onClick={() => navigate('/contact')}>
                {['Contact'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{<MailIcon/>}</ListItemIcon>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))}
            </List>
            <Divider/>

        </div>
    );


    //sphere
    const Texts = [
        'HTML', 'CSS', 'SCSS', 'JAVASCRIPT',
        'STRIPE', "PYTHON", "REACT",
        'MYSQL', 'NODE.JS', 'EXPRESS',
        'JQUERY', 'MCMASTER', 'WESTERN', 'MATLAB'
    ]
    TagCloud('.sphere', Texts, {
        // radius in px
        radius: 300,
        // animation speed
        // slow, normal, fast
        maxSpeed: 'normal',
        initSpeed: 'normal',
        // 0 = top
        // 90 = left
        // 135 = right-bottom
        direction: 135,
        // interact with cursor move on mouse out
        keep: true
    })


    function Word({children, ...props}) {
        const color = new THREE.Color()
        const fontProps = {
            font: '/Inter-Bold.woff',
            fontSize: 2.5,
            letterSpacing: -0.05,
            lineHeight: 1,
            'material-toneMapped': false
        }
        const ref = useRef()
        const [hovered, setHovered] = useState(false)
        const over = (e) => (e.stopPropagation(), setHovered(true))
        const out = () => setHovered(false)
        // Change the mouse cursor on hover
        useEffect(() => {
            if (hovered) document.body.style.cursor = 'pointer'
            return () => (document.body.style.cursor = 'auto')
        }, [hovered])
        // Tie component to the render-loop
        useFrame(({camera}) => {
            // Make text face the camera
            ref.current.quaternion.copy(camera.quaternion)
            // Animate font color
            ref.current.material.color.lerp(color.set(hovered ? '#fa2720' : 'white'), 0.1)
        })
        return <Text ref={ref} onPointerOver={over} onPointerOut={out}
                     onClick={() => console.log('clicked')} {...props} {...fontProps} children={children}/>
    }

    function Cloud({count = 4, radius = 100}) {
        // Create a count x count random words with spherical distribution
        const words = useMemo(() => {
            const temp = []
            const spherical = new THREE.Spherical()
            const phiSpan = Math.PI / (count + 1)
            const thetaSpan = (Math.PI * 2) / count
            for (let i = 1; i < count + 1; i++)
                for (let j = 0; j < count; j++) temp.push([new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)), randomWord()])
            return temp
        }, [count, radius])
        return words.map(([pos, word], index) => <Word key={index} position={pos} children={word}/>)
    }


    const alpha = () => {
        const elements = document.getElementsByClassName('alpha')
        for (let i = 0; i <= elements.length; i++) {
            elements[i].addEventListener('animationend', function (e) {
                elements[i].classList.remove('animated')
            })
            elements[i].addEventListener('mouseover', function (e) {
                elements[i].classList.add('animated')
            })
        }
    }


    return (
        <div className='Content'>
            <div className='Content_1'>
                <div className='Content_1_module1'>
                    <div className='Content_1_module1_Left'>
                        {/*    my intro*/}
                        <h1 className='alpha' onMouseEnter={() => alpha()}>
                            Full Stack Developer
                        </h1>
                        <h2>
                            Craft solid and scalable frontend products
                            <br/>
                            with great user experiences
                        </h2>
                        <h2>
                            Precise and decent backend database structure
                            <br/>
                            with 100% enthusiasm
                        </h2>
                        <div className='Content_1_module1_Left_Words'>
                            <span>Front end developer who writes clean, elegant and efficient codes</span>
                            <br/>
                            <span>Back end developer specialising structural backend data system </span>
                        </div>
                    </div>

                    {/*<div className='Content_1_module1_Middle'>*/}
                    {/*    /!*    my photo*!/*/}

                    {/*</div>*/}

                    <div className='Content_1_module1_Right'>
                        {/*<AutoAwesomeMotionIcon/>*/}
                        <img src={me} alt="" width='150px' height='230px'/>
                        <br/>
                        {['Click to See More Info'].map((anchor) => (
                            <React.Fragment key={anchor}>
                                <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                                <SwipeableDrawer
                                    anchor={anchor}
                                    open={state[anchor]}
                                    onClose={toggleDrawer(anchor, false)}
                                    onOpen={toggleDrawer(anchor, true)}
                                >
                                    {list(anchor)}
                                </SwipeableDrawer>
                            </React.Fragment>
                        ))}

                        <span className='.canvas'></span>


                    </div>
                    <div className='Content_1_module1_Slide' aria-label='Main Navigation' id='section-nav'>
                        <ul>
                            <li>
                                <button type='button' aria-label='Go to first section. Pitch' onClick={goToTop}
                                        className='Content_1_module1_Slide_top'>
                                    Back to top
                                </button>
                            </li>
                            {/*<li>*/}
                            {/*    <button type='button' aria-label='Go to second section. Pitch' onClick={goToTop} className='Content_module1_Slide_second'>*/}

                            {/*    </button>*/}
                            {/*</li>*/}

                        </ul>

                    </div>
                </div>
                <div className='Content_1_moduleMid'>
                    <Canvas className='Content_2_moduleDown' style={{height: '1000px', width: '975px'}} dpr={[1, 2]}
                            camera={{position: [0, 0, 35], fov: 90}}>
                        <fog attach="fog" args={['#202025', 0, 80]}/>
                        <Cloud count={8} radius={20}/>
                        <TrackballControls/>
                    </Canvas>
                </div>
            </div>


            <div>


                <div className='Content_2'>


                    <div className='Content_2_module2'>
                        <div className='Content_2_module2_Left'>
                            <h1>
                                Design
                            </h1>
                            <div className='Content_2_module2_Left_words'>
                                <p align='left'>
                                    I'm probably not the typical designer positioned behind an Illustrator art board
                                    adjusting
                                    pixels,
                                    but I design. Immersed in stylesheets tweaking font sizes and contemplating layouts
                                    ,
                                    I'm
                                    committed to creating fluent user experiences while staying fashionable.</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="523" height="214" viewBox="0 0 523 214"
                                 data-shape="true" aria-hidden="true" id="cs-pattern-right">
                                <path fill="#4831d4"
                                      d="M313.651 20.388a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM332.62 20.388a1.5 1.5 0 11-3.002 0 1.5 1.5 0 013.001 0zM351.587 20.388a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM370.555 20.388a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM389.522 20.388a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 20.388a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 20.388a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 20.388a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM465.394 20.388a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM484.362 20.388a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM503.33 20.388a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM522.298 20.388a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM313.651 39.611a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 .001zM332.62 39.611a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.001.001zM351.587 39.611a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 .001zM370.555 39.611a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 .001zM389.522 39.611a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 39.611a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 39.611a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 39.611a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 .001zM465.394 39.611a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 .001zM484.362 39.611a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 .001zM503.33 39.611a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001.001zM522.298 39.611a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 .001zM313.651 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM332.62 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM351.587 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM370.555 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM389.522 58.834a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM408.49 58.834a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM427.458 58.834a1.5 1.5 0 11-2.999.001 1.5 1.5 0 012.999-.001zM446.427 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM465.394 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM484.362 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM503.33 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM522.298 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM313.651 78.057a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM332.62 78.057a1.5 1.5 0 11-3.002 0 1.5 1.5 0 013.001 0zM351.587 78.057a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM370.555 78.057a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM389.522 78.057a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 78.057a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 78.057a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 78.057a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM465.394 78.057a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM484.362 78.057a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM503.33 78.057a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM522.298 78.057a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM313.651 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM332.62 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM351.587 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM370.555 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM389.522 97.28a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM408.49 97.28a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM427.458 97.28a1.5 1.5 0 11-2.999.001 1.5 1.5 0 012.999-.001zM446.427 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM465.394 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM484.362 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM503.33 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM522.298 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM313.651 116.504a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM332.62 116.504a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.001 0zM351.587 116.504a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM370.555 116.504a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM389.522 116.504a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 116.504a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 116.504a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 116.504a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM465.394 116.504a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM484.362 116.504a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM503.33 116.504a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM522.298 116.504a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM313.651 135.726a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM332.62 135.726a1.5 1.5 0 11-3.002 0 1.5 1.5 0 013.001 0zM351.587 135.726a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM370.555 135.726a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM389.522 135.726a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 135.726a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 135.726a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 135.726a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM465.394 135.726a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM484.362 135.726a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM503.33 135.726a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM522.298 135.726a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM313.651 154.95a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM332.62 154.95a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.001 0zM351.587 154.95a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM370.555 154.95a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM389.522 154.95a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 154.95a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 154.95a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 154.95a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM465.394 154.95a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM484.362 154.95a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM503.33 154.95a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM522.298 154.95a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM313.651 174.173a1.5 1.5 0 11-3-.002 1.5 1.5 0 013 .002zM332.62 174.173a1.5 1.5 0 11-3.002-.002 1.5 1.5 0 013.001.002zM351.587 174.173a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013 .002zM370.555 174.173a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013 .002zM389.522 174.173a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 174.173a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 174.173a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 174.173a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013 .002zM465.394 174.173a1.5 1.5 0 11-3-.002 1.5 1.5 0 013 .002zM484.362 174.173a1.5 1.5 0 11-3-.002 1.5 1.5 0 013 .002zM503.33 174.173a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013.001.002zM522.298 174.173a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013 .002zM313.651 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM332.62 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM351.587 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM370.555 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM389.522 193.395a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM408.49 193.395a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM427.458 193.395a1.5 1.5 0 11-2.999.002 1.5 1.5 0 012.999-.002zM446.427 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM465.394 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM484.362 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM503.33 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM522.298 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM313.651 212.619a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM332.62 212.619a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.001 0zM351.587 212.619a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM370.555 212.619a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM389.522 212.619a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 212.619a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 212.619a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 212.619a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM465.394 212.619a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM484.362 212.619a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM503.33 212.619a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM522.298 212.619a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0z"></path>
                                <path fill="none" stroke="#4831d4" stroke-miterlimit="50" stroke-width="2"
                                      d="M16.753 9.614a7.891 7.891 0 11-15.782 0 7.891 7.891 0 0115.782 0zM44.822 9.614a7.892 7.892 0 11-15.784-.002 7.892 7.892 0 0115.784.002zM72.89 9.614a7.891 7.891 0 11-15.782 0 7.891 7.891 0 0115.783 0zM100.96 9.614a7.892 7.892 0 11-15.783-.002 7.892 7.892 0 0115.783.002zM129.028 9.614a7.891 7.891 0 11-15.782 0 7.891 7.891 0 0115.782 0z"></path>
                            </svg>
                        </div>

                        <div className='Content_2_module2_Right'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="325" height="193" viewBox="0 0 325 193"
                                 data-shape="true" aria-hidden="true" id="cs-pattern-left">
                                <path fill="none" stroke="#4831d4" stroke-miterlimit="50" stroke-width="2"
                                      d="M17.053 9.57a7.891 7.891 0 11-15.782 0 7.891 7.891 0 0115.782 0zM45.122 9.57a7.891 7.891 0 11-15.782 0 7.891 7.891 0 0115.782 0zM73.19 9.57a7.891 7.891 0 11-15.781 0 7.891 7.891 0 0115.782 0zM101.26 9.57a7.891 7.891 0 11-15.782 0 7.891 7.891 0 0115.782 0zM129.329 9.57a7.891 7.891 0 11-15.783 0 7.891 7.891 0 0115.783 0zM238.083 103.963v0l-.561 22.259v0l22.259-.561v0l-.561 22.258v0l22.259-.56v0l-.561 22.258v0l22.259-.56v0l-.559 22.26v0l22.26-.56v0"></path>
                            </svg>

                            <h1>
                                Education
                            </h1>

                            <div className='Content_2_module2_Right_words'>
                                <p align="left">
                                    McMaster University
                                    Bachelor of Engineering in Electrical Engineering (CO-OP)
                                    <br/>
                                    Western University
                                    <br/>
                                    Master of Engineering in Electrical Engineering(Communications and Signal
                                    Processing)
                                    Mark2Win boot-camp
                                    Boot-Camp for full-stack developer for JavaScript, React, HTML, SCSS, Redux and
                                    Node.Js.

                                </p>
                            </div>
                        </div>

                    </div>
                    {/*<div className='Content_2_moduleDown'>*/}
                    <div className='sphere'>

                    </div>

                    {/*<TagCloud*/}
                    {/*    style ={{*/}
                    {/*    */}
                    {/*}}/>*/}


                    {/*</div>*/}
                </div>
            </div>


        </div>
    )


}