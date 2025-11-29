import React from 'react';
import DeleteButton from './DeleteButton';

const DeleteLab = ({ data }) => {
    const totalLength = (data?.items || []).length + (data?.components).length;
    if (totalLength < 1)
        return (
            <div className='flex py-2 justify-center'>
                <DeleteButton data={data} />
            </div>
        );
    else return <div></div>
}

export default DeleteLab;
