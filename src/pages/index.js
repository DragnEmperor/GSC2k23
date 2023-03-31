import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import { places } from "../data/data"
import TravelCard from "../components/travelCard/travelCard"

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <div className="overflow-hidden">
      <picture className="block fixed z-[-5] opacity-[0.8]">
        <source srcSet="/images/webp/bg.webp" type="image/webp" />
        <img
          className="object-cover w-screen h-screen"
          src="/images/bg.jpg"
          alt="hero-bg"
        />
      </picture>
      <div className="absolute h-screen bg-black/50 w-screen">
                {/* Your content here */}
      </div>
      <div className="relative h-screen flex flex-row">
        <div className="w-1/2 h-full flex flex-col justify-center items-center relative top-[10%]">
          <div className="text-center backdrop-blur-[1px] p-8">
            <h1 className="text-[6rem] text-white main-heading mb-0">Wabi-Sabi</h1>
            <h4 className="text-white main-heading text-xl tracking-widest">Time for a new advent</h4>
          </div>
        </div>
        <div className="w-1/2 h-full flex justify-center">
          <div className="w-1/2 h-full backdrop-blur-[2px]" style={{direction:"rtl"}}>
            <div className="h-2/5 flex justify-center">
              <p className="text-[2.5rem] text-white font-['Poppins'] font-extrabold tracking-widest relative top-1/3">Locations</p>
            </div>
            <div className="overflow-y-visible overflow-x-hidden h-1/2 section-scrollbar">
              {places.map((place, index) => (
                <Link to={place.route}  key={index}>
                <TravelCard place={place} />
                </Link>
              ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
