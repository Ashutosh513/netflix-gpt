import React from 'react';
import Header from './Header';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Browse = () => {
    const user = useSelector((store) => store.user);
    const navigate = useNavigate();

    const handleSingIn = () => {
        navigate('/');
    };

    return (
        <div>
            {user ? (
                <div>
                    <Header></Header>
                </div>
            ) : (
                <div className='h-screen w-full flex justify-center items-center text-xl'>
                    <p>
                        You'r not{' '}
                        <span
                            className='cursor-pointer text-red-600'
                            onClick={handleSingIn}
                        >
                            Sing In
                        </span>
                    </p>
                </div>
            )}
        </div>
    );
};

export default Browse;
