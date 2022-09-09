import React from 'react';
import { Link } from 'react-router-dom';

//I want to make a simple introduction page where the user clicks a button and it navigates
//them to the calculation page

const Home = () => {
    return(
        <div className='home-styling'>
            <div className='greeting'>
                <h1>Welcome to My Custom Calculator</h1>
                <h2>Click Below To Begin!</h2>
                <Link to='/calculator'>
                    <button id='start-button'>Start</button>
                </Link>
                
            </div>
        </div>
    )
}

export default Home;