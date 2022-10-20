import React from 'react';

export const Navbar: React.FC = () => {
    return (
        <nav>
            <div className="nav-wrapper blue lighten-2 px1">
                <a href="/" className="brand-logo">Todos</a>
                <ul  className="right hide-on-med-and-down">
                    <li><a href="/">Task list</a></li>
                    <li><a href="/about">Info</a></li>
                </ul>
            </div>
        </nav>
    );
};

