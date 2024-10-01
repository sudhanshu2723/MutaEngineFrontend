import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { Link, matchPath, useLocation } from "react-router-dom";
import logo from "../../assets/Images/logo.png";
import { NavbarLinks } from "../../data/navbar-links";
import { GiHamburgerMenu } from "react-icons/gi";
import HamburgerMenu from "./HamburgerMenu";

function Navbar() {
  const location = useLocation();
  const [subLinks, setSubLinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false); // State for small screen menu

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  return (
    <div
      className={`flex h-14 items-center py-11 justify-center border-b-[1px] ${
        location.pathname !== "/" ? "bg-richblack-800" : ""
      } transition-all duration-200`}
    >
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" width={120} height={25} loading="lazy" />
        </Link>

        {/* Menu Icon for small screens */}
        <div className="mr-4 md:hidden">
          <GiHamburgerMenu
            onClick={() => setIsMenuModalOpen((prev) => !prev)}
            className={`fill-richblack-100`}
            fontSize={24}
          />
        </div>

        {/* Hamburger Menu for small and medium screens */}
        <HamburgerMenu
          isMenuModalOpen={isMenuModalOpen}
          setIsMenuModalOpen={setIsMenuModalOpen}
        >
          <div className="flex flex-col gap-y-2 py-5 px-5">
            {/* Links */}
            {NavbarLinks.map((link, index) => (
              <Link
                to={link?.path}
                key={index}
                className="block"
                onClick={() => setIsMenuModalOpen(false)} // Close menu on link click
              >
                <div className="flex gap-x-2 items-center w-full py-2 px-3 text-richblack-100 hover:text-richblack-25 hover:bg-richblack-700 uppercase tracking-wider">
                  {link.title}
                </div>
              </Link>
            ))}

            {/* Log In / Sign Up */}
            <div className="flex flex-col mt-8 gap-4">
              <Link to="/signup">
                <button className="rounded-2xl border-2 border-blue-200 bg-black-800 px-[26px] py-[8px] text-white">
                  Log In
                </button>
              </Link>
              <Link to="/login">
                <button className="rounded-2xl border bg-blue-100 px-[26px] py-[8px]">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </HamburgerMenu>

        {/* Navigation links for large screens */}
        <nav className="hidden md:block">
          <ul className="flex gap-x-6 text-richblack-25">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Solutions" ? (
                  <div
                    className={`group relative flex cursor-pointer items-center gap-1 ${
                      matchRoute("/Solutions/:catalogName")
                        ? "text-yellow-25"
                        : "text-richblack-25"
                    }`}
                  >
                    <p>{link.title}</p>
                    <BsChevronDown />
                    <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                      <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>
                      {loading ? (
                        <p className="text-center">Loading...</p>
                      ) : subLinks && subLinks.length ? (
                        subLinks
                          .filter((subLink) => subLink?.courses?.length > 0)
                          .map((subLink, i) => (
                            <Link
                              to={`/catalog/${subLink.name
                                .split(" ")
                                .join("-")
                                .toLowerCase()}`}
                              className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
                              key={i}
                            >
                              <p>{subLink.name}</p>
                            </Link>
                          ))
                      ) : (
                        <p className="text-center">Nothing Found</p>
                      )}
                    </div>
                  </div>
                ) : (
                  <Link to={link?.path}>
                    <p
                      className={`${
                        matchRoute(link?.path)
                          ? "text-yellow-25"
                          : "text-richblack-25"
                      }`}
                    >
                      {link.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Log In / Sign Up for large screens */}
        <div className="hidden items-center gap-x-4 md:flex">
          <Link to="/signup">
            <button className="rounded-2xl border-2 border-blue-200 bg-black-800 px-[26px] py-[8px] text-white">
              Log In
            </button>
          </Link>
          <Link to="/login">
            <button className="rounded-2xl border bg-blue-100 px-[26px] py-[8px]">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
