import React from 'react';

const BottomLayer = () => {
    return (
        <div className='sm:h-[25vh] h-[15vh] md:h-[45vh]  bg-black w-full relative'>
            <div style={{backgroundImage: "url('/images/footer-dip.png')"}} className='h-[80%] z-5 absolute inset-0  bg-cover'>
            </div>
        </div>
    );
};

export default BottomLayer;