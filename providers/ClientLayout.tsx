/* eslint-disable react-hooks/set-state-in-effect */
'use client'
import IntroAnimation from '@/components/IntroAnimation';
import React, { useEffect, useState } from 'react';

const ClientLayout = ({ children }: { children: React.ReactNode }) => {

    const [intro, setIntro] = useState(true)

    useEffect(() => {
        setIntro(true);
    }, []);

    return (
        <>
        {
            children
        }
            {intro && <IntroAnimation onComplete={() => setIntro(false)} />}
            
        </>
    )


};

export default ClientLayout;