import React from 'react';
import BucketGirl from '../../assets/images/bucketgirl.png'

const Landing = () => {
    return (
        <>
            <div class="hero h-screen bg-accent lg:h-[60vh] mt-16 lg:mt-10">
                <div class="hero-content flex-col lg:flex-row">
                    <div>
                        <p data-aos-duration="1500" data-aos="fade-right" data-aos-delay="800">Best Quality</p>
                        <h1 data-aos-duration="1200" data-aos="fade-right" data-aos-delay="1500" class="text-5xl font-bold max-w-xl">Professional Cleaning Service</h1>
                        <p data-aos-duration="1000" data-aos="fade-right" data-aos-delay="2000" class="py-6 max-w-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button data-aos-duration="2000" data-aos="zoom-in" data-aos-delay="2500" class="btn btn-primary">Get Started</button>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="1200" data-aos-delay="500" className='h-[60vh]'>
                        <img alt="" src={BucketGirl} class="h-full" />
                    </div>
                </div>
            </div>
            <div className='shadow-lg p-10 w-11/12 mx-auto bg-base-200 mt-[-30px] z-20 relative rounded-2xl'>
                <h1 className='text-2xl text-primary mb-5'>Get Free Estimate</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                </div>
                <button className='btn btn-primary mt-5'>Get a Quote</button>
            </div>
        </>
    );
};

export default Landing;