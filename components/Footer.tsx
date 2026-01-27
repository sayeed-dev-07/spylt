
import React from 'react';
import TextAnimation from './textReveal';
import TextAnimationChar from './TextCharsAnim';

import ContactItem from './ContactItem';
import UnderlineAnim from './UnderlineAnim';
import { BiRightArrow, BiSolidRightArrow } from 'react-icons/bi';
import { FaArrowRight } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className='h-screen md:min-h-[110vh] xl:min-h-[136vh] bg-black w-full relative'>
            <div className='z-0 absolute top-[15%] md:top-[10%] text-center w-full font-bold'>
                <TextAnimationChar style='text-5xl md:text-8xl text-milk xl:text-[130px] font-antonio' text='#CHUGRESPONSIBLY' />
            </div>
            <div className='absolute after:content-[""] after:w-full after:h-full after:absolute after:inset-0 after:z-2 after:bg-black/45 inset-0 h-full w-full z-4'>
                <video
                    autoPlay
                    muted
                    playsInline
                    className="w-full  h-full object-cover object-center pointer-events-none"
                >
                    <source src={`https://www.dl.dropboxusercontent.com/scl/fi/plc5z9ncgq0y2x21c84s8/splash3.webm?rlkey=4zzvzi1nw77o1zs3cnkmxlanx&amp;st=d1hnytz0&amp;dl=0`} type="video/webm" />
                </video>
            </div>
            <div className='absolute h-full w-full inset-0 z-10 flex flex-col gap-y-[10%]'>
                <div className='w-full py-[5%] flex-1 items-start flex  sm:items-end justify-center h-full text-4xl'>
                    <div className='flex items-center justify-center gap-x-8'>
                        <ContactItem item='yt' />
                        <ContactItem item='insta' />
                        <ContactItem item='tiktok' />
                    </div>
                </div>
                <div className='flex-3 md:flex-2 lg:flex-1 pb-[2%] font-semibold sm:font-normal px-2.5 sm:px-[3%] font-nunito flex flex-col items-start justify-between  text-xl text-milk'>
                    <div className='flex items-center flex-col md:flex-row gap-y-12 sm:gap-y-24 gap-x-12 justify-between w-full'>
                        <div className='flex items-start  gap-x-12 justify-between flex-wrap text-nowrap'>
                            <div>
                                <UnderlineAnim text='SPYLT Flavors' />
                            </div>
                            <div className='flex flex-col gap-y-1.5'>
                                <UnderlineAnim text='Chug Club' />
                                <UnderlineAnim text='Student Marketing' />
                                <UnderlineAnim text='Dairy Dealers' />
                            </div>
                            <div className='flex flex-col gap-y-1.5'>
                                <UnderlineAnim text='Company' />
                                <UnderlineAnim text='Contacts' />
                                <UnderlineAnim text='Tasty Talk' />
                            </div>
                        </div>
                        <div className='max-w-145 w-full gap-y-6 flex flex-col  sm:gap-y-12 '>
                            <TextAnimation text='Get Exclusive Early Access and Stay Informed About Product Updates, Events, and More!' />
                            <div className='text-4xl font-bold font-antonio flex items-center justify-between w-full border-b-[0.1vw] py-2.5 sm:py-5 leading-normal'>
                                <input placeholder='Enter your email' className='w-[80%] sm:flex-3 outline-none flex-wrap' type="text" />
                                <FaArrowRight className='w-fit cursor-pointer flex-none flex-1' />
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center gap-x-4 gap-y-2 justify-between w-full text-lg flex-wrap'>
                        <div>
                            <p>Copyright © 2025 Spylt - All Rights Reserved</p>
                        </div>
                        <div className='flex items-center justify-between gap-x-4'>
                            <UnderlineAnim text='Privacy Policy' />
                            <UnderlineAnim text='Terms of Service' />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;