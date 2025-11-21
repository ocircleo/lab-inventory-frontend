import React from 'react';

const LoadingUI = () => {
    return (
        <div className='h-screen w-full bg-base-100 grid place-content-center'>
            <span className="loading loading-spinner text-primary scale-200"></span>
        </div>
    );
}

export default LoadingUI;
