import React from 'react';

const NoDataFound = ({ message }) => {
    return (
        <div className='p-16 text-2xl flex items-center justify-center font-bold text-orange-600'>
            <p>{message}</p>
        </div>
    );
}

export default NoDataFound;
