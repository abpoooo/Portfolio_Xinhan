import React, { Component } from 'react';
import randomColor from 'randomcolor';
import TagCloud from 'react-tag-cloud';
// import CloudItem from './CloudItem';
import './scss/Cloud.scss'

const styles = {
    large: {
        fontSize: 60,
        fontWeight: 'bold'
    },
    small: {
        opacity: 0.7,
        fontSize: 16
    }
};
const CloudItem = (props) => (
    <div { ...props } className="tag-item-wrapper">
        <div>
            { props.text }
        </div>
        <div className="tag-item-tooltip">
            HOVERED!
        </div>
    </div>
);

class Cloud extends Component {
    componentDidMount() {
        setInterval(() => {
            this.forceUpdate();
        }, 3000);
    }

    render() {
        return (
            <div className='app-outer'>
                <div className='app-inner'>
                    <TagCloud
                        className='tag-cloud'
                        style={{
                            fontFamily: 'sans-serif',
                            //fontSize: () => Math.round(Math.random() * 50) + 16,
                            fontSize: 30,
                            color: () => randomColor({
                                hue: 'blue'
                            }),
                            padding: 5,
                        }}>
                        <div
                            style={{
                                fontFamily: 'serif',
                                fontSize: 40,
                                fontStyle: 'italic',
                                fontWeight: 'bold',
                                color: randomColor()
                            }}>Futurama</div>

                        <div style={styles.large}>Full Stack</div>
                        <div style={styles.large}>Front End</div>
                        <div style={styles.large}>Back End</div>
                        {/*<div style={styles.large}>react</div>*/}
                        <div style={{fontFamily: 'courier'}}>Javascript</div>
                        {/*<div style={{fontSize: 30}}>World trigger</div>*/}
                        {/*<div style={{fontStyle: 'italic'}}>Avengers</div>*/}
                        {/*<div style={{fontWeight: 200}}>Family Guy</div>*/}
                        {/*<div style={{color: 'green'}}>American Dad</div>*/}
                        <div className="tag-item-wrapper">
                            {/*<div>*/}
                            {/*    Hover Me Please!*/}
                            {/*</div>*/}
                            {/*<div className="tag-item-tooltip">*/}
                            {/*    HOVERED!*/}
                            {/*</div>*/}
                        </div>
                        {/*<div>Gobots</div>*/}
                        {/*<div>Thundercats</div>*/}
                        {/*<div>M.A.S.K.</div>*/}
                        {/*<div>GI Joe</div>*/}
                        {/*<div>Inspector Gadget</div>*/}
                        <div>TypeScript</div>
                        <div>Typeorm</div>
                        <div>Node.js</div>
                        <div>LinkedIn</div>
                        <div>Gitlab</div>
                        <div>GIT</div>
                        <div>Github</div>
                        <div>React</div>
                        <div>HTML</div>
                        <div>CSS</div>
                        <div>Python</div>
                        <div>Engineering</div>
                        <div>McMaster</div>
                        <div style={styles.small}>Western</div>
                        <div style={styles.small}>CityView</div>
                        <div style={styles.small}>LULUlemon</div>
                        <div style={styles.small}>E-commerce</div>
                        <div style={styles.small}>Stripe</div>
                        <div style={styles.small}>Sportify</div>
                        <div style={styles.small}>Shopify</div>
                    </TagCloud>
                </div>
            </div>
        );
    }
}

export default Cloud;
// export default Cloud;