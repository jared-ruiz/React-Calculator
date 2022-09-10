import React from 'react';

//this page will be a very simple contact page
//to provide quick access to my github and to additionally
//practice routing. Nothing too over the top.

const Contact = () => {

    const linkNavigation = (e) => {
        if (e.target.innerText === 'GitHub') {
            window.open('https://github.com/jared-ruiz', '_blank');
        }
        else if (e.target.innerText === 'LinkedIn') {
            window.open('https://www.linkedin.com/in/jaredruiz/', '_blank');
        }
        window.open('https://jared-ruiz.github.io/Portfolio-Website/', '_blank')
    }

    return(
        <div className='contact-styling'>
            <div className='contact-information'>
                <h1 id='contact-title'>Contact Information</h1>
                <button onClick={linkNavigation} className='contact-buttons' >GitHub</button>
                <button onClick={linkNavigation} className='contact-buttons'>LinkedIn</button>
                <button onClick={linkNavigation} className='contact-buttons'>Portfolio</button>
            </div>
        </div>
    )
}

export default Contact;