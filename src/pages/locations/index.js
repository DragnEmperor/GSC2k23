import React from "react";
import Layout from "../../components/layout";
import ExpandedCard from "../../components/travelCard/expandedCard";
import { places } from "../data";
import Map from "../../components/Map/Map";
import TravelCard from "../../components/travelCard/travelCard";
import { Link } from "gatsby";

const Locations = () => {
    return (
        <Layout>
            <picture className="block fixed z-[-5] opacity-[0.9]">
                <source srcSet="/images/webp/bg2.webp" type="image/webp" />
                <img
                    className="object-cover w-screen h-screen"
                    src="/images/bg2.jpg"
                    alt="hero-bg"
                />
            </picture>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 pt-32 max-w-[85rem] mx-6 md:mx-auto">
                {(places.map((place, index) => (
                    <Link to={place.route}  key={index}>
                    <TravelCard place={place}/>
                    </Link>
                )))}
            </div>
        </Layout>
    )
};

export default Locations;