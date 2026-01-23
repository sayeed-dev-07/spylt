import React from 'react';

const Vitamin = ({name, amount, md=false, border=true}:{name: string, amount:number, border?:boolean, md?:boolean}) => {
    return (
        <div className={`${md ? 'hidden md:flex': 'flex'}  items-center justify-center`}>
            <div className={`lg:px-8 md:px-4 xl:px-12`}>
            <p className='md:text-lg xl:text-2xl'>{name}</p>
            <span className='text-lg'>up to</span>
            <p className='lg:text-3xl md:text-2xl xl:text-4xl font-bold'>{amount}mg</p>
        </div>
        </div>
    );
};

export default Vitamin;