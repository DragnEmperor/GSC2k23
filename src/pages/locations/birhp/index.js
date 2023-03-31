import React from "react";
import Layout from "../../../components/layout";
import ExpandedCard from "../../../components/travelCard/expandedCard";
import { vendorData } from "../../../data/data";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";

const Locations = () => {
    const location = useLocation()
    .pathname.split("/")
    .filter((e) => e); //for removing empty elements coming from leading and trailing '/'
    console.log(location)
    const vendors = (vendorData.filter((vendor) => vendor.place === location[1]))[0].vendors;
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
            <div className="grid lg:grid-cols-4 gap-x-4 md:grid-cols-3 grid-cols-1 pt-32 max-w-[85rem] mx-6 md:mx-auto">
                {(vendors.map((vendor, index) => (
                    <Link key={index} to={vendor.route} state={{vendor}}>
                    <ExpandedCard vendor={vendor}/>
                    </Link>
                )))}
            </div>
        </Layout>
    )
};

export default Locations;