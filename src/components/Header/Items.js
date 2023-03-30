import {
    faHome,
    faUsers,
    faImages,
    faChalkboardTeacher,
    faUserGraduate,
    faStickyNote,
  } from "@fortawesome/free-solid-svg-icons";

  const navItems = [
    {
      name: "Home",
      route: "",
      comingSoon: false,
    },
    {
      name: "Locations",
      route: "locations",
      comingSoon: true,
    },
    {
      name: "About Us",
      route: "aboutUs",
      comingSoon: true,
    },
  ];

  export default navItems;
  