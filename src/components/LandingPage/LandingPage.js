import React from 'react'
import '../../index.css';
import logoimage from './랜딩페이지.jpeg';
import localimage from './동네생활.jpeg';

function LandingPage() {
    return (
        <div className="wrapper">
            <header className="wrapper-header">
                <img src={logoimage} className="landing-logo" alt="logo" />
            </header>
            <header className="wrapper-header">
                <img src={localimage} className="landing-logo" alt="logo" />
            </header>
        </div>
    )
}

export default LandingPage
