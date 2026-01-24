import React from 'react';
import CardReveal from './CardReveal';
import TextAnimation from './textReveal';

const BenefitSection = () => {
    return (
        <div className='bg-black min-h-dvh py-[5%] flex flex-col items-center  gap-y-6 sm:gap-y-12 md:gap-y-24'>
            <TextAnimation style='text-lg
            px-1.5 sm:text-2xl text-milk max-w-[600px] mx-auto text-center' text={`Unlock the Advantages:
                Explore the Key Benefits of Choosing SPYLT`}/>
            <div>
                <CardReveal text='Shelf stable' bgColor='#c88e64' rotate='rotate-3'/>
            <CardReveal text='Protein + Caffeine' bgColor='#faeade' white={false} rotate='rotate-0'/>
            <CardReveal text='Infinitely recyclable' bgColor='#7f3b2d' rotate='rotate-2'/>
            <CardReveal text='Lactose free' bgColor='#b59b5a' white={false} rotate='-rotate-6'/>
            </div>

        </div>
    );
};

export default BenefitSection;