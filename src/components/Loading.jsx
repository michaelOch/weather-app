import React from 'react';

const Loading = () => {
    return (
        <section className=' w-screen h-screen flex flex-col justify-center items-center p-5 bg-white fixed top-0 left-0 right-0 bottom-0'>
            <div className=' w-20 h-20 flex flex-col justify-center items-center p-2 rounded-full border-t-4 border-indigo-400 animate-spin'>
                <div className=' w-10 h-10 bg-gray-700 rounded-full'></div>
            </div>
        </section>
    )
}

export default Loading;