import React from 'react';
import { Link } from 'react-router-dom';

//This page will simply serve as a very minimalistic home page to just get the user to engage
//with the page prior to using the calculator. Ideally I just have the application start
//with the calculator, but I wanted to practice routing again.

const Home = () => {
    return(
        <div className='home-styling'>
            <div className='greeting'>
                <h1>Welcome to My <span id='underline-intro'>Custom</span> Calculator!</h1>
                <h2>Click Below To Begin!</h2>
                <Link to='/calculator'>
                    <button id='start-button'>Start</button>
                </Link>
            </div>
            <div className='contact-positioning'>
                <Link to='/contact'>
                    <button id='contact-button'>Contact</button>
                </Link>
            </div>
        </div>
    )
}

export default Home;