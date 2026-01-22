import React from 'react';
import ProductCard, { productInfo } from './ProductCard';


const SliderWrapper = () => {
    
    return (
        
        /* flex-nowrap is critical so items stay in a single horizontal line */
        <div className='flex flex-col items-center px-2 lg:flex-row flex-nowrap gap-y-24 py-[5%] sm:py-0 lg:gap-x-75 '>
            {productInfo.map((products, index)=>(
                <div className='flex-none' key={index}>
                    <ProductCard Num={index}/>
                </div>
                
            ))}
            
        </div>

    );
};

export default SliderWrapper;