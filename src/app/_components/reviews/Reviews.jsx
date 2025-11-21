import React from 'react';

const Reviews = ({ index = 1 }) => {
    return (
        <div className='bg-base-100 p-4 rounded'>
            <div className='flex gap-4'>
                <div className='bg-amber-900 text-white flex items-center justify-center h-14 aspect-square rounded-full'>
                    <p>SH</p>
                </div>
                <div className='flex flex-col items-start'>
                    <p className='font-bold'>Salman Hossain</p>
                    <div className='flex items-center justify-start'>
                        <div className="rating rating-xs rating-half pointer-events-none  items-center scale-75  origin-left">
                            <input type="radio" name={`review-${index}`} className="rating-hidden" />
                            <input type="radio" name={`review-${index}`} className="mask mask-star-2 mask-half-1 bg-yellow-500" aria-label="0.5 star" />
                            <input type="radio" name={`review-${index}`} className="mask mask-star-2 mask-half-2 bg-yellow-500" aria-label="1 star" />
                            <input type="radio" name={`review-${index}`} className="mask mask-star-2 mask-half-1 bg-yellow-500" aria-label="1.5 star" />
                            <input type="radio" name={`review-${index}`} className="mask mask-star-2 mask-half-2 bg-yellow-500" aria-label="2 star" />
                            <input type="radio" name={`review-${index}`} className="mask mask-star-2 mask-half-1 bg-yellow-500" aria-label="2.5 star" />
                            <input type="radio" name={`review-${index}`} className="mask mask-star-2 mask-half-2 bg-yellow-500" aria-label="3 star" />
                            <input type="radio" name={`review-${index}`} className="mask mask-star-2 mask-half-1 bg-yellow-500" aria-label="3.5 star" />
                            <input type="radio" name={`review-${index}`} className="mask mask-star-2 mask-half-2 bg-yellow-500" aria-label="4 star" />
                            <input type="radio" name={`review-${index}`} className="mask mask-star-2 mask-half-1 bg-yellow-500" aria-label="4.5 star" defaultChecked />
                            <input type="radio" name={`review-${index}`} className="mask mask-star-2 mask-half-2 bg-yellow-500" aria-label="5 star" />
                        </div>
                        <p className='text-xs'>{index} month ago</p>
                    </div>
                </div>
            </div>
            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus cum, incidunt quis beatae facere modi molestiae, tempore aliquam magnam deserunt quia animi rem repellat architecto repellendus quisquam deleniti quos sint!. lorem</p>
        </div>
    );
}

export default Reviews;
