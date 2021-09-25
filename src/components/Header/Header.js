import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">

            {/* header starts  */}
            <div className="top-header">
                <h2>Sunshine Marketing</h2>
                <h4>Let's grow your business together</h4>
            </div>
            <div className="bottom-header">
                <h4>Total Budget: $ 70 million </h4>

            </div>

            {/* header ends  */}


            {/* nav starts  */}

            <nav>
                <a href="/aboutus">About Us</a>
                <a href="/carrer">Carrer</a>
                <a href="/contact">Contact</a>
            </nav>

            {/* nav ends  */}

        </div>
    );
};

export default Header;