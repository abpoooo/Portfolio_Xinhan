import {useState} from "react";
import {Header} from "./Header";
import {Footer} from "./Footer";
import emailJs from "emailjs-com"
import './scss/Contact.scss'
import LinkedIn from '../linkedin.png';
import ins from '../ins.png';
import github from '../github.png'
import {Link} from "@mui/material";
import facebook from '../facebook.png'

export const Contact = () => {

    // const [email, setEmail] = useState("")
    // const [isEmailEntered, setIsEmailEntered] = useState(false)
    // const [isEmailValid, setIsEmailValid] = useState(false)
    //
    // function emailValidate(email) {
    //     return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    // }
    //
    // const [name, setName] = useState("")
    // const [message, setMessage] = useState("")
    //
    // const [contact, setContact] = useState({
    //     email: '',
    //     name: '',
    //     message: ''
    // })
    //
    // const onChangeEmail = (e) => {
    //     const email = e.target.value;
    //     setEmail(email);
    //     setIsEmailEntered(true)
    //     emailValidate(email) ? setIsEmailValid(true) : setIsEmailValid(false)
    //     console.log('email', e.target.value)
    //     setContact(prevState => ({
    //         ...prevState,
    //         email: email                                                       //newly added
    //     }))
    //
    // };
    //
    // const onChangeName = (e) => {
    //     const name = e.target.value;
    //     console.log(name)
    //     setContact(prevState => ({
    //         ...prevState,
    //         name:name
    //     }))
    // }
    //
    // const onChangeMessage = (e) => {
    //     const message = e.target.value;
    //     console.log(name)
    //     setContact(prevState => ({
    //         ...prevState,
    //         message: message
    //     }))
    // }

    const sendEmail = (e) => {
        e.preventDefault()

        emailJs.sendForm('service_eyhfkf9', 'template_upiear8', e.target, 'bU5RUIvP3ARtdSjYJ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
    return (
        <div className='Contact'>
            <Header/>
            <div className='Contact_Main'>
                <div className='Contact_Main_Top'>
                    <div className='Contact_Main_Top_Left'>
                        <h1>
                            Contact.
                        </h1>
                        <h3>
                            Do you speak Na’vi? <br/> It's ok if you don't, I speak English too.
                        </h3>
                        <div className='Contact_Main_Top_Left_icons'>

                            <ul className='ul1'>
                                <li>
                                    <a href="https://www.linkedin.com/in/xinhan-yang-2b6938194/"
                                       className='linkedIn'><img
                                        src={LinkedIn} alt=""/>LinkedIn</a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/abpooooo" className='instagram'><img src={ins}
                                                                                                            alt=""/>Instagram</a>
                                </li>
                            </ul>
                            <ul className='ul2'>
                                <li>
                                    <a href="https://github.com/abpoooo" className='github'><img src={github} alt=""/>GitHub
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/xinhan.yang.180/" className='facebook'><img
                                        src={facebook} alt=""/>Facebook</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='Contact_Main_Top_Right'>
                        <img
                            src='https://cdn.dribbble.com/users/720825/screenshots/3253310/slim-jim-_dribbble_-_800x600_.gif'
                            alt=""/>
                    </div>
                </div>
                <div className='Contact_Main_Bottom'>

                    <h2>
                        Send me email
                    </h2>
                    <form onSubmit={sendEmail}>

                        <div className='Contact_Main_Bottom_Left'>
                            <div className='Contact_Main_Bottom_Left_Info'>

                                <input type="text" placeholder='Name'
                                       name='name'/>
                                <input type="email"
                                       placeholder='Email Address'
                                       name='email'/>
                                <input type="text" placeholder='Subject'
                                       name='subject'/>
                            </div>
                        </div>

                        <div className='Contact_Main_Bottom_Right'>

                            <textarea className='Contact_Main_Bottom_Right_Message' name="message" id="" cols="30"
                                      rows="8" placeholder='Your message'></textarea>
                            <input className='Contact_Main_Bottom_Right_Submit' type="submit" value='Send Message'/>
                        </div>

                    </form>


                </div>
            </div>
            <Footer/>
        </div>
    )
}

// <div className='Content_module2'>
//     <div className='Content_module2_Send'>
//
//     </div>
// </div>