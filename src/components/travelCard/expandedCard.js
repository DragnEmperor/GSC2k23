import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";


const ExpandedCard = ({ vendor, setLocation }) => {
    const [content,setContent] = useState(false)

    const contentHandler = () => {
        setContent(true)
    }

    return (
        <article class="w-full py-6 px-3 transform duration-500 hover:-translate-y-1 relative">
            <div class="bg-white shadow-xl rounded-lg overflow-hidden">
                <div class="bg-cover bg-center h-64 p-4" style={{ backgroundImage: `url(${vendor.img})` }}>
                    <div class="flex justify-end text-white">
                        <svg class="w-6 h-6 mr-2 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span>{vendor.stats}</span>
                    </div>
                </div>
                <div class="p-4 py-5">
                    <p class="uppercase tracking-wide text-sm font-bold text-gray-700">
                        {vendor.name}
                    </p>
                    <p class="text-3xl text-gray-900 mt-1.5 mb-1.5">{vendor.price}</p>
                    {/* <p class="text-gray-700">404 Nightmare Streets</p> */}
                </div>
                    <button className="absolute rounded-full text-white flex justify-center items-center w-16 h-16 bg-blue-400 bottom-0 left-[42%] font-['Poppins'] text-lg hover:bg-blue-300" onClick={contentHandler}>
                    View
                    </button>
                    {content && <div class="px-4 pt-3 pb-4 border-t border-gray-200 bg-gray-100">
                    <div class="text-xs uppercase font-bold text-gray-600 tracking-wide">
                        Call For Booking
                    </div>
                    <div class="flex items-center pt-2">
                        <div>
                            {/* <p class="font-bold text-gray-900">{vend.vendor}</p> */}
                            <p class="text-sm text-gray-700">{vendor.vendorPhone}</p>
                        </div>
                    </div>
                </div>}
            </div>
        </article>
    )
};

export default ExpandedCard;

{/* <div class="w-1/2 flex items-center">
                        <svg class="w-6 h-6 mr-2 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span>11219</span>  
                    </div> */}