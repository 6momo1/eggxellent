import React from 'react';
import egg1 from '../images/egg1.jpeg'
import egg2 from '../images/egg2.jpg'
const Content = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center 
    bg-white h-screen font-mono py-40 mb-20
    ">
                <img src={egg1} className="h-full rounded mb-20 shadow" />
                <div className='flex flex-col justify-center items-center mb-10'>
                    <h2 className='text-3xl mb-2'>Egg Toast</h2>
                    <p className='mb-2 text-2xl'>Crispy, delicious and nutritious</p>
                    <span className='text-2xl'>$16</span>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center 
    bg-white h-screen font-mono py-40 mb-20
    ">
                <img src={egg2} className="h-full rounded mb-20 shadow" />
                <div className='flex flex-col justify-center items-center mb-20'>
                    <h2 className='text-3xl mb-2'>Egg Avocado</h2>
                    <p className='mb-2 text-2xl'>Juicy, creamy and delicious</p>
                    <span className='text-2xl mb'>$16</span>
                </div>
            </div>
        </>
    );
};

export default Content;
