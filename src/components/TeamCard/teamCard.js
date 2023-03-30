import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGit, faGithub, faLinkedinIn  } from "@fortawesome/free-brands-svg-icons";
const teamCard = ({data}) => {
    return(
        <div className="flex flex-col">
          <div>
            <picture>
                <source srcSet={data.webp} type="image/webp" />
                <img
                  className={"rounded-full md:w-40 md:h-[10.5rem] object-cover w-28 h-28 "}
                  src={data.img}
                  alt="teamImg"
                />
              </picture>
          </div>
          <div className={"md:w-40 text-center md:text-lg text-white pt-2 md:pt-4 font-['Poppins'] w-28 text-xs "}>
            <p className="whitespace-nowrap">{data.name}</p>
          </div>
          <div className="flex flex-row pt-4 justify-center gap-4">
          <a href={data.linkedIn} class="p-2 w-[2.5rem] h-[2.5rem] bg-white rounded-full text-center hover:bg-blue-400 hover:text-white"><FontAwesomeIcon className="text-lg" fixedWidth icon={faLinkedinIn} /></a>
          <a href={data.github} class="p-2 w-[2.5rem] h-[2.5rem] bg-white rounded-full text-center hover:bg-blue-400 hover:text-white"><FontAwesomeIcon className="text-lg" fixedWidth icon={faGithub} /></a>
          </div>
        </div>
    )
}

export default teamCard;