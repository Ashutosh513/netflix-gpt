import React from 'react';

const FormDisclaimer = ({ isSignInForm, toggleSignInForm, knowMore }) => {
    return (
        <div className={`${isSignInForm ? 'mt-14' : 'mt-8'}`}>
            <div className='text-gray-500 text-sm '>
                {isSignInForm ? 'New to Netflix? ' : 'Already registered? '}
                <span
                    className='text-white cursor-pointer hover:underline font-semibold'
                    onClick={toggleSignInForm}
                >
                    Sign {isSignInForm ? 'Up' : 'In'} now
                </span>
                .
            </div>
            <p className='my-4 text-xs text-gray-400'>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.{' '}
                <span
                    className=' text-blue-400 cursor-pointer hover:underline'
                    onClick={(e) => {
                        e.target.classList.add('hidden');
                        e.target.parentNode.nextElementSibling.classList.remove(
                            'hidden'
                        );
                    }}
                >
                    Learn more.
                </span>
            </p>
            <p className={`text-xs text-gray-400 ${knowMore ? '' : 'hidden'}`}>
                The information collected by Google reCAPTCHA is subject to the
                Google{' '}
                <a
                    href='https://policies.google.com/privacy'
                    target='_blank'
                    rel='noreferrer'
                    className='text-blue-400 hover:underline'
                >
                    Privacy Policy
                </a>{' '}
                and{' '}
                <a
                    href='https://policies.google.com/terms'
                    target='_blank'
                    rel='noreferrer'
                    className='text-blue-400 hover:underline'
                >
                    Terms of Service
                </a>
                , and is used for providing, maintaining, and improving the
                reCAPTCHA service and for general security purposes (it is not
                used for personalised advertising by Google).
            </p>
        </div>
    );
};

export default FormDisclaimer;
