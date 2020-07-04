import React from 'react';


import './Toolbar.css';


const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div></div>
            <div className="toolbar_logo"> Fawad Akram</div>
            <div className="space"/>
            <div className="toolbar_navigation-items">
                <ul>
                
                    <li> <a href="/">Home</a> </li>
                    <li><a href="/">About</a> </li>
                    <li> <a href="/">Contact</a> </li>
                </ul>



            </div>

        </nav>


    </header>
);


export default toolbar;