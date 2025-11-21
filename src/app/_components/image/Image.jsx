import React from 'react';

const Image = ({ url, alt = "image", className="" }) => {

    return (
        <>
            <img src={url} alt={alt} className={className} />
        </>
    );
}

export default Image;
