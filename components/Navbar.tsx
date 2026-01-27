'use client'
import Image from 'next/image';
import React from 'react';
import Button from './Button';

const Navbar = () => {
    return (
        <nav className='sm:py-6 py-2 px-2 md:px-[5%] fixed inset-0 left-0 top-0 h-[12%] sm:h-[15%] w-full  z-50 flex items-center justify-between'>
            <div className='relative h-[60%] sm:w-50 w-25 flex items-center justify-start'>
                <Image alt='logo' loading='eager' src={'/images/nav-logo.svg'} fill sizes='100vw'/>
            </div>
            <div></div>
            <div>
                <Button bgColor='#faeade' text='find in stores'/>
            </div>
        </nav>
    );
};

export default Navbar;