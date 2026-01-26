import React from 'react';
import { BsInstagram, BsTiktok, BsYoutube } from 'react-icons/bs';

const ContactItem = ({item}:{item: 'yt' | 'insta' | 'tiktok'}) => {
    return (
        <div className='p-5 sm:p-8 cursor-pointer hover:bg-[#ffffff1a] transition-all duration-150 rounded-full backdrop-blur-none border-[0.1vw] border-[#faeade33] text-3xl sm:text-4xl'>
            {
                item === 'insta' &&
                <BsInstagram  className='text-milk' />
            }
            {
                item === 'tiktok' &&
                <BsTiktok  className='text-milk' />
            }
            {
                item === 'yt' &&
                <BsYoutube  className='text-milk' />
            }
        </div>
    );
};

export default ContactItem;