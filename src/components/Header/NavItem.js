import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";

const NavItem = ({ item, icons }) => {
  const location = useLocation()
    .pathname.split("/")
    .filter((e) => e); //for removing empty elements coming from leading and trailing '/'
  let path = location.includes(item.route); //checks if the route is present in current URL
  return (
    <Link
      to={"/" + item.route}
      activeClassName="block underline md:rounded-full"
    >
      <span
        onClick={item.clicked}
        className={
          "flex items-center px-3 py-2 md:py-1 md:rounded-full hover:bg-white/90 md:hover:rounded-full hover:text-black " +
          (path && " underline ")
        }
        onKeyDown={item.clicked}
        role="button"
        tabIndex="0"
      >
        {icons && (
          <span className="mr-2">
            <FontAwesomeIcon className="text-lg" icon={item.icon} />
          </span>
        )}
        <span className="block px-3 py-2 md:py-1 text-base">
          {item.name}
        </span>
      </span>
    </Link>
  )
};
export default NavItem;
