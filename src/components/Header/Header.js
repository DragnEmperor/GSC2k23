// Components
import React, { Component } from "react";
import NavItem from "./NavItem";
import NavbarItems from "./Items";
import { Location } from "@reach/router";

// Icons and Styles
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./nav.css";

class Navbar extends Component {
  state = {
    isOpen: false,
    isBg: false,
    show: true,
    scrollPos: 0,
    newColor:false,
  };

  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", this.handleScroll);
    }
    this.props.navbar=='white'?this.setState({newColor:true}):this.setState({newColor:false})
  }
  handleScroll = () => {
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > this.state.scrollPos,
    });
    if (typeof window !== 'undefined') {
      if (window.pageYOffset > 10) {
        this.setState({
          isBg: true,
        });
      } else {
        this.setState({
          isBg: false,
        });
      }
    }
  };
   
  componentDidUpdate(prevProps, prevState) {
    let backC = document.getElementById("navBg")
    let textC = document.getElementById("navColour")
    if(this.state.newColor){
      textC.classList.remove('text-black')
      textC.classList.add('text-white')
      if(this.state.isBg){
        backC.classList.remove('bg-white')
        backC.classList.add('bg-black')
      }
    }
  }

  drawerHandler = () => {
    this.setState({
      isOpen: false,
    });
  };
  
  render() {
    return (
      <React.Fragment>
          {/* Desktop View starts */}
        <nav className={"hidden heading-font lg:block fixed w-full h-10 z-[100] opacity-90 top-0 text-black"} id="navColour">
          <div className={"hidden lg:flex w-full navbar-testing " + (this.state.isBg?" bg-white":"")} id="navBg">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="ml-6 lg:mt-2 h-14"
            />
            <div className="flex w-full items-center justify-start ml-20">

            <div className={"flex rounded-full font-bold "} >
              {NavbarItems.map((element, index) => (
                <NavItem
                item={element}
                key={index + Math.random()}
                clicked={this.drawerHandler}
                icons={false}
                />
                ))}
            </div>
                </div>
          </div>
        </nav>
        {/* Desktop View ends */}
        {/* Mobile View starts */}
        <div className="heading-font lg:hidden flex fixed top-0 text-gray-200 z-20">
          <button
            className="top-0 h-16 w-16"
            aria-label="Open Menu"
            onClick={() =>
              this.setState((prevState) => ({ isOpen: !prevState.isOpen }))
            }
          >
            <FontAwesomeIcon className="text-2xl" icon={faBars} fixedWidth />
          </button>
        </div>
        {/* transparent Backdrop starts */}
        {this.state.isOpen && (
          <div
            v-show="isOpen"
            className="z-10 fixed inset-0 transition-opacity"
          >
            <div
              onClick={this.drawerHandler}
              className="absolute inset-0 opacity-0"
              onKeyDown={this.drawerHandler}
              role="button"
              tabIndex="0"
              aria-label="menu-btn"
            ></div>
          </div>
        )}
        {/* transparent Backdrop ends */}
        <aside
          className={`heading-font text-gray-200 transform top-0 left-0 w-48 bg-zinc-800 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${
            this.state.isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={this.drawerHandler}
          onKeyDown={this.drawerHandler}
        >
          <span
            onClick={this.drawerHandler}
            onKeyDown={this.drawerHandler}
            role="button"
            tabIndex="0"
            aria-label="menu-btn"
            className="flex w-full items-center p-4 border-b"
          >
            <img src="/images/logo.png" alt="Logo" className="h-20 mx-auto" />
          </span>
          {NavbarItems.map((element, index) => (
            <NavItem
              item={element}
              key={index + Math.random()}
              clicked={this.drawerHandler}
              icons={true}
            />
          ))}
        </aside>
        {/* Mobile View ends */}
      </React.Fragment>
    );
  }
}

const nav = (props) => (
  <Location>
    {(locationProps) => <Navbar {...locationProps} {...props} />}
  </Location>
);

export default nav;
