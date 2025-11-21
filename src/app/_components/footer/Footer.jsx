import React from 'react';

const Footer = () => {
    return (
        <footer className='flex flex-col items-center pb-2 bg-dark-black text-white pt-8'>
            <div className="grid grid-cols-6 bg-dark-black text-white p-2 w-full lg:w-5/6 gap-8 lg:gap-4">
                <div className='col-span-6 row-start-2 col-start-1 lg:row-start-1 lg:col-start-1 lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                    <nav className='flex flex-col items-center'>
                        <div className='flex flex-col'>
                            <h6 className="footer-title ">Quick Links</h6>
                            <a className="link link-hover ">Why Choose Us</a>
                            <a className="link link-hover">Category</a>
                            <a className="link link-hover">Course Program</a>
                            <a className="link link-hover">Testimonials</a>

                        </div>
                    </nav>
                    <nav className='flex flex-col items-center'>
                        <div className='flex flex-col'>
                            <h6 className="footer-title text-white">Company</h6>
                            <a className="link link-hover">About us</a>
                            <a className="link link-hover">Career</a>
                            <a className="link link-hover">Events</a>
                        </div>
                    </nav>
                    <nav className='flex flex-col items-center'>
                        <div className='flex flex-col'>
                            <h6 className="footer-title">Support</h6>
                            <a className="link link-hover">FAQ</a>
                            <a className="link link-hover">Call Center</a>
                        </div>
                    </nav>
                    <nav className='flex flex-col items-center'>
                        <div className='flex flex-col'>

                            <h6 className="footer-title">Follow Us</h6>
                            <a className="link link-hover">Facebook</a>
                            <a className="link link-hover">Twitter</a>
                            <a className="link link-hover">Instagram</a>
                            <a className="link link-hover">Youtube</a>
                        </div>
                    </nav>
                </div>

                <form className='col-span-6 col-start-1 row-start-1  lg:col-span-2 lg:col-start-5 w-full h-full  flex items-center justify-center flex-col'>
                    <h6 className="footer-title text-center">Subscribe to our Newsletter</h6>
                    <fieldset className="w-full px-0 sm:px-12 lg:px-0">

                        <div className="flex bg-base-100 w-full p-3 rounded-2xl items-center">
                            <input
                                type="text"
                                placeholder="Your Email Address"
                                className="input w-full text-neutral border-0 focus:outline-0 shadow-none focus:shadow-none placeholder:text-light-gray" />
                            <button className="btn btn-primary rounded-xl bg-custom-blue btn-sm sm:btn-md">Subscribe</button>
                        </div>
                    </fieldset>

                </form>

            </div >

            <div className='bg-white h-0.5 my-5 w-5/6'></div>
            <aside className='text-center'>
                <p> © Bangladesh Council {new Date().getFullYear()}. All rights reserved.</p>
            </aside>
        </footer >
    );
}

export default Footer;
