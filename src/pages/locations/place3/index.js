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
            <div className="max-w-7xl mx-auto">
                Coming SOON!
            </div>
        </Layout>
    )
};

export default Locations;