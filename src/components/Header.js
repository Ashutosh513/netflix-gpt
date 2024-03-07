import React from 'react';

const Header = ({ isSignInForm, setIsSignInForm }) => {
    return (
        <div className='absolute px-6 py-2 z-10 w-full bg-gradient-to-b from-black'>
            <img
                className={`w-48 ${isSignInForm ? 'cursor-pointer' : ''}`}
                src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
                alt='logo'
                onClick={() => {
                    setIsSignInForm(false);
                }}
            />
        </div>
    );
};

export default Header;
