import React from "react";
import Layout from "../../components/layout";
import ExpandedCard from "../../components/travelCard/expandedCard";
import { places } from "../../data/data";
import Map from "../../components/Map/Map";
import TravelCard from "../../components/travelCard/travelCard";
import { Link } from "gatsby";

const Locations = () => {
    return (
        <Layout navbar={"white"}>
            <picture className="block fixed z-[-5] opacity-[0.9]">
                <source srcSet="/images/webp/bg2.webp" type="image/webp" />
                <img
                    className="object-cover w-screen h-screen"
                    src="/images/bg2.jpg"
                    alt="hero-bg"
                />
            </picture>
            <div className="absolute h-screen bg-black/50 w-screen z-[-3]">
                {/* Your content here */}
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-x-2 grid-cols-1 pt-32 max-w-[85rem] mx-6 md:mx-auto">
                {(places.map((place, index) => (
                    <div className={" " + (place.locked ? " pointer-events-none " : "")} key={index}>
                        <Link to={place.route} >
                            <TravelCard place={place} />
                        </Link>
                    </div>
                )))}
            </div>
        </Layout>
    )
};

export default Locations;