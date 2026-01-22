'use client'
import Image from 'next/image';
import React from 'react';


export const productInfo = [
    {
        bgImg: 'https://cdn.prod.website-files.com/6707999f0e8f3bdab42cb624/678a342364feb3829533de65_bg.svg',
        layerImg: '/1layer.webp',
        drinkImg: '/1drink.webp',
        rotation: "md:rotate-[-8deg] rotate-0",
        name: 'Chocolate milk'

    },
    {
        bgImg: 'https://cdn.prod.website-files.com/6707999f0e8f3bdab42cb624/678a34acccf5df70b0721bd0_bg-2.svg',
        layerImg: '/2layer.webp',
        drinkImg: '/2drink.webp',
        rotation: "md:rotate-[8deg] rotate-0",
        name: 'Strawberry milk'
    },
    {
        bgImg: 'https://cdn.prod.website-files.com/6707999f0e8f3bdab42cb624/678a351764feb38295350adb_bg-4.svg',
        layerImg: '/3layer.webp',
        drinkImg: '/3drink.webp',
        rotation: "md:rotate-[-8deg] rotate-0",
        name: 'Cookies & Cream'
    },
    {
        bgImg: 'https://cdn.prod.website-files.com/6707999f0e8f3bdab42cb624/678a3533c43d4812ebcd6853_bg-5.svg',
        layerImg: '/4layer.webp',
        drinkImg: '/4drink.webp',
        rotation: "md:rotate-[8deg] rotate-0",
        name: 'Peanut butter chocolate'
    },
    {
        bgImg: 'https://cdn.prod.website-files.com/6707999f0e8f3bdab42cb624/678a346d7e435f4b6be31247_bg-1.svg',
        layerImg: '/5layer.webp',
        drinkImg: '/5drink.webp',
        rotation: "md:rotate-[-8deg] rotate-0",
        name: 'Max chocolate milk'

    },

]
//  
const ProductCard = ({ Num }: { Num: number }) => {
    const item = productInfo[Num]
    return (
        <div className={`${item.rotation} w-full h-full relative md:px-[5%]`}>

            <Image src={item.bgImg} className='max-w-100 h-auto  w-full sm:max-w-full sm:w-100 md:w-[600px]  lg:w-200' loading='eager' alt={`${item.name} background`} width={800} height={700} />

            <Image
                src={item.drinkImg}
                alt={`${item.name} bottle`}
                width={400}
                height={300}
                className="
                        absolute bottom-0 left-1/2 -translate-x-1/2
                        w-full h-auto max-w-[200px] sm:max-w-full sm:w-[220px] md:w-[300px] lg:w-[330px]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 300px, 330px"
            />


            <Image src={item.layerImg} loading='eager' className='max-w-[400px] left-0 h-auto top-0 absolute z-10 w-full sm:max-w-full sm:w-[400px] md:w-[600px] lg:w-[1200px]' alt={`${item.name} decoration layer`} width={1200} height={1000} />

            <p className='absolute z-10 text-white bottom-5 font-antonio text-3xl sm:text-6xl uppercase font-semibold left-3 md:left-15'>
                {item.name}
            </p>
        </div>
    );

};

export default ProductCard;