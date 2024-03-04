import React from 'react';

const Footer = () => {
    return (
        <div className='px-60 pt-8 h-48 bg-black text-gray-500 text-base opacity-95'>
            <div className='w-full h-auto bottom-0'>
                <p className='text-sm'>
                    Questions? Call{' '}
                    <a href='tel:000-800-919-1694'>000-800-919-1694</a>
                </p>
            </div>
            <ul className='text-xs grid grid-cols-4 gap-4 mt-10'>
                <li>
                    <a href='https://help.netflix.com/en/node/412'>FAQ</a>
                </li>
                <li>
                    <a href='https://help.netflix.com/en/'>Help Center</a>
                </li>
                <li>
                    <a href='https://help.netflix.com/legal/termsofuse'>
                        Terms of Use
                    </a>
                </li>
                <li>
                    <a href='https://help.netflix.com/legal/privacy'>Privacy</a>
                </li>
                <li>
                    <a
                        href='/'
                        onClick={() => {
                            alert(
                                'Sorry, Cookie Preference not available right now.'
                            );
                        }}
                    >
                        Cookie Preferences
                    </a>
                </li>
                <li>
                    <a href='https://help.netflix.com/legal/corpinfo'>
                        Corporate Information
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Footer;
