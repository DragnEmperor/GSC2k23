import React from "react";
import Layout from "../../components/layout";
import TeamCard from "../../components/TeamCard/teamCard";
import { useLocation } from "@reach/router";
import { teamData } from "../../data/data";

const AboutUs = () => {
    const location = useLocation()
    .pathname.split("/")
    .filter((e) => e);

    return (
        <Layout navbar={'white'}>
            <div>
                <picture className="block fixed z-[-5] opacity-[1]">
                    <source srcSet="/images/webp/bg4.webp" type="image/webp" />
                    <img
                        className="object-cover w-screen h-screen"
                        src="/images/bg4.jpg"
                        alt="hero-bg"
                    />
                </picture>
                <div className=" py-32 max-w-7xl mx-auto">
                    <div className="bg-black/80 rounded-xl p-8">
                        <h1 className=" text-center text-6xl heading-font text-white ">OUR TEAM</h1>
                        <div className="flex flex-row justify-center items-center pt-20 gap-20">
                          {teamData.map((data, index) => (
                            <TeamCard data={data} key={index} />
                            ))}
                        </div>
                    </div>
                    <div className="bg-black/80 rounded-xl p-8 mt-20">
                        <h1 className=" text-center text-6xl heading-font text-white ">Contact Us</h1>
                        <div className="flex justify-center items-center">
                        <div className="grid grid-cols-2 text-white pt-20 gap-y-10 heading-font">
                          <div>Email</div>
                          <a class="mb-2 underline" href="mailto:20bec030@nith.ac.in">20bec030@nith.ac.in</a>
                          <div>Phone</div>
                          <div>7876029292</div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
};

export default AboutUs;