import React from 'react';
import './Header.css';


const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#282c34"}}>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                    <a className="nav-link" href="/courses">Online Courses <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/goal">Our Goals</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/team">Our Team</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/class">Online Classes</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;