import React from 'react';
import { useNavigate } from 'react-router-dom'

export const AboutPage: React.FC = () => {
    const navigate = useNavigate()
    return (
        <>
            <h1>Information page</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam asperiores atque aut deleniti explicabo illum iste
                iure necessitatibus sit, tempore!
            </p>
            <button
                className="btn"
                onClick={() => navigate('/')}
            >
                Go back to our tasks
            </button>
        </>
    );
};

