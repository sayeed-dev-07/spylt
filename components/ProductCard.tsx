'use client'
import Image from 'next/image';
import React from 'react';


const productInfo = [
    {
        bgImg: 'https://cdn.prod.website-files.com/6707999f0e8f3bdab42cb624/678a342364feb3829533de65_bg.svg',
        layerImg: '/1layer.webp',
        drinkImg: '/1drink.webp'

    },
    {
        bgImg: 'https://cdn.prod.website-files.com/6707999f0e8f3bdab42cb624/678a34acccf5df70b0721bd0_bg-2.svg',
        layerImg: '/2layer.webp',
        drinkImg: '/2drink.webp'

    },
    {
        bgImg: 'https://cdn.prod.website-files.com/6707999f0e8f3bdab42cb624/678a351764feb38295350adb_bg-4.svg',
        layerImg: '/3layer.webp',
        drinkImg: '/3drink.webp'

    },
    {
        bgImg: 'https://cdn.prod.website-files.com/6707999f0e8f3bdab42cb624/678a3533c43d4812ebcd6853_bg-5.svg',
        layerImg: '/4layer.webp',
        drinkImg: '/4drink.webp'

    },
    {
        bgImg: 'https://cdn.prod.website-files.com/6707999f0e8f3bdab42cb624/678a346d7e435f4b6be31247_bg-1.svg',
        layerImg: '/5layer.webp',
        drinkImg: '/5drink.webp'

    },

]
//  
const ProductCard = ({ rotate = 'right', Num }: { rotate?: string, Num: number }) => {
    const item = productInfo[Num]
    return (
        <div className='h-screen min-w-[70vw] flex-center '>
            <div style={{ backgroundImage: `url(${item.bgImg})` }} className={`${rotate === 'right' ? 'rotate-10' : '-rotate-10'} rounded-3xl relative z-9 w-[60%] mx-auto h-150 `}>
                <div style={{ backgroundImage: `url(${item.layerImg})` }} className='absolute bg-contain bg-no-repeat rotate-0 z-10 -left-15 h-full w-[110%] inset-0'></div>
                <div style={{ backgroundImage: `url(${item.drinkImg})` }} className='absolute  z-10 left-40 h-full w-full inset-0 bg-contain bg-no-repeat '></div>
            </div>
            

        </div>
    );

};

export default ProductCard;