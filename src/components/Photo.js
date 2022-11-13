import banff from '../banff.jpg'
import mor from '../moren.jpg'
import falls from '../fall.jpg'
import './scss/Photo.scss'

const Photo = () => {
    return (
        <div className='main'>
            <div className='cardfan'>

                <img src={mor} alt="" id='mor'/>
                <img src={falls} alt="" id='falls'/>
                <img src={banff} alt="" id='banff'/>
            </div>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                <filter id="blur">
                    <feGaussianBlur stdDeviation="3"/>
                </filter>
            </svg>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                <filter id="greyscale">
                    <feColorMatrix type="matrix" values="0.3333 0.3333 0.3333 0 0
0.3333 0.3333 0.3333 0 0
0.3333 0.3333 0.3333 0 0
0 0 0 1 0"/>
                </filter>
            </svg>

            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                <filter id="sepia">
                    <feColorMatrix values="0.14 0.45 0.05 0 0
0.12 0.39 0.04 0 0
0.08 0.28 0.03 0 0
0 0 0 1 0"/>
                </filter>
            </svg>
        </div>


    )
}

export default Photo