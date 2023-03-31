import React from 'react';
import Map from '../../../../components/Map/Map'
import Layout from '../../../../components/layout';

const Vendor1 = ({ location }) => {
    const data = (location.search.substr(1)).split('&');
    const coordinates = {}
    data.forEach(str => {
        const [key, value] = str.split('=');
        coordinates[key] = value;
    });

    const vendor = location.state.vendor;
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
            <div className="absolute h-screen bg-black/70 w-screen z-[-3]">
                {/* Your content here */}
            </div>
            <Map latitude={coordinates.latitude} longitude={coordinates.longitude} />
            <div className='max-w-7xl mx-auto'>
                <div className='w-4/5 rounded-xl bg-white mx-auto'>
                <h1 className="p-4 text-4xl font-['Merriweather'] font-extrabold">{vendor.name}</h1>
                </div>
            </div>
        </Layout>
    )
}

export default Vendor1;