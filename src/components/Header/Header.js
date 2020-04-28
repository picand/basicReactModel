import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends React.Component {
    render() {
        return <div className="Header">
            <div className="Header__logo">
                <img alt="Accenture Logo" src="https://portugalsnews.com/wp-content/uploads/2019/06/Game-Builder-Google-publisher-for-quotnoobsquot-to-create-video-games-Computers.jpg" />

            </div>
            <h1 className="Header__title">Test</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/prueba1">Prueba1</Link>
                </li>
                <li>
                    <Link to="/prueba2">Prueba2</Link>
                </li>
            </ul>
        </div>;
    }
}

export default Header;