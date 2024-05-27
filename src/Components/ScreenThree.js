import React from 'react';
import img from '../images/img.png';
import { useState, useEffect } from 'react';

export const ScreenThree = () => {
    const [techPartnershipCount, setTechPartnershipCount] = useState(1);
    const [dailySupportCount, setDailySupportCount] = useState(1);
    const [dailySupport, setDailySupport] = useState(1);

    useEffect(() => {
        const techPartnershipInterval = setInterval(() => {
            setTechPartnershipCount((prevCount) => prevCount + 1);
        }, 100);

        const dailySupportInterval = setInterval(() => {
            setDailySupportCount((prevCount) => prevCount + 1);
        }, 100);

        const dailySupportInter = setInterval(() => {
            setDailySupport((prevCount) => prevCount + 1);
        }, 100);

        if (techPartnershipCount >= 5) {
            clearInterval(techPartnershipInterval);
        }

        if (dailySupportCount >= 24) {
            clearInterval(dailySupportInterval);
        }

        if (dailySupport >= 7) {
            clearInterval(dailySupportInter);
        }

        return () => {
            clearInterval(techPartnershipInterval);
            clearInterval(dailySupportInterval);
            clearInterval(dailySupportInter);
        };
    }, [techPartnershipCount, dailySupportCount, dailySupport]);

    return (
        <div className='overflow-auto h-screen font-poppins'> {/* Set a fixed height and enable scrolling */}
            <div className='grid gap-x-8 gap-y-2 grid-cols-1 sm:grid-cols-2 mt-5'>
                <div className='flex justify-center mt-5'>
                    <img src={img} alt="" className='w-full max-w-96 h-auto' />
                </div>
                <div className='mt-5'>
                    <h1 className='text-4xl'>Our Support</h1>
                    <div className='grid gap-x-8 gap-y-2 grid-cols-1 sm:grid-cols-2 mt-5'>
                        {/* Technology Partnership */}
                        <div className='border-4 border-l-blue-500 border-r-blue-500 rounded-lg bg-yellow-300 w-88 h-28 text-2xl'>
                            <h1 className='text-center gap-10 mt-5'>Technology Partnership</h1>
                            <h1 className='text-center'>{techPartnershipCount}+</h1>
                        </div>

                        {/* Daily Support */}
                        <div className='border-4 border-l-blue-500 border-r-blue-500 rounded-lg bg-yellow-300 w-88 h-28 text-2xl'>
                            <h1 className='text-center gap-10 mt-5'>Daily support</h1>
                            <h1 className='text-center'>{dailySupportCount} X {dailySupport}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScreenThree;
