import React from 'react';
import Map from '../../../../components/Map/Map'
import Layout from '../../../../components/layout';

const Vendor4 = ({ location }) => {
    const data = (location.search.substr(1)).split('&');
    const coordinates = {}
    data.forEach(str => {
        const [key, value] = str.split('=');
        coordinates[key] = value;
    });
    console.log(location)
    return (
        <Layout navbar={'white'}>
            <picture className="block fixed z-[-5] opacity-[0.9]">
                <source srcSet="/images/webp/bg2.webp" type="image/webp" />
                <img
                    className="object-cover w-screen h-screen"
                    src="/images/bg2.jpg"
                    alt="hero-bg"
                />
            </picture>
            <div className="fixed h-screen bg-black/70 w-screen z-[-3]">
                {/* Your content here */}
            </div>
            <Map latitude={coordinates.latitude} longitude={coordinates.longitude} />
            <div className='max-w-7xl mx-auto pb-20'>
                <div className='w-4/5 rounded-xl bg-white mx-auto pb-16'>
                    <h1 className="p-4 pt-12 text-4xl font-['Merriweather'] font-extrabold text-center">ParaBooking</h1>
                    <div className='flex justify-center items-center flex-col gap-y-14'>
                        <div className="grid grid-cols-2 w-1/2 text-black pt-20 gap-y-10 heading-font">
                            <div>Address</div>
                            <div class="mb-2 underline">The HANGAR, VPO, Bir - Matru Rd, opposite Garden Cafe, near Chowgan, Chowk, Bir, Himachal Pradesh 176077</div>
                            <div>Phone</div>
                            <div>080911 49832</div>
                        </div>
                        <button className='sm:mt-0 py-2 px-5 md:py-3 md:px-6 bg-purple-700 hover:bg-purple-600 font-bold text-white md:text-lg rounded-lg shadow-md'>Book Now</button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Vendor4;