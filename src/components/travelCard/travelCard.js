import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const TravelCard = ({ place }) => {
    return (
        <div className={"p-8 "}>
            <article class="p-10 relative max-h-[12rem] max-w-3xl w-full rounded-xl text-gray-100 xl:col-span-2 bg-center bg-cover transform duration-500 hover:-translate-y-1 cursor-pointer" style={{ backgroundImage: `url(${place.img})` }}>
                <div class="mt-20 flex justify-between ">
                    <button class="p-2 w-[2.5rem] h-[2.5rem] bg-blue-400 rounded-full text-center my-auto"><FontAwesomeIcon className="text-lg" fixedWidth icon={faArrowRight} /></button>
                    <span class="p-3 pl-0 font-bold text-xl tracking-widest uppercase">{place.name}</span>
                </div>
            {place.locked &&  <div className="absolute top-0 h-full bg-black/80 w-full left-0 rounded-xl">
                <div className="flex justify-center items-center h-full text-2xl">
                {/* Your content here */}Coming Soon!
                </div>
            </div>}
            </article>
        </div>
    );
}
export default TravelCard;