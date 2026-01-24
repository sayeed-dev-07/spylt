import React from 'react';
import CardReveal from './CardReveal';
import TextAnimation from './textReveal';

const BenefitSection = () => {
    return (
        <div className='bg-black min-h-dvh '>
            <TextAnimation style='text-xl text-milk max-w-[450px] mx-auto text-center' text={`Unlock the Advantages:
                Explore the Key Benefits of Choosing SPYLT`}/>
            {/* <CardReveal/> */}
        </div>
    );
};

export default BenefitSection;