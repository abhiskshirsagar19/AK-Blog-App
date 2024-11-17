/* eslint-disable no-undef */
import { Button, Navbar, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaBars, FaMoon, FaTimes } from "react-icons/fa";
import { useState } from "react";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-orange-600 via-orange-400 to-orange-300 rounded-lg text-white">
          Abhishek's
        </span>
        Blog
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search...."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button
          className="w-12 h-10 hidden sm:inline lg:mr-5"
          color="gray"
          pill
        >
          <FaMoon />
        </Button>
        <Link to="/sign-in">
          <Button gradientDuoTone="pinkToOrange">Sign In</Button>
        </Link>
        <Button className="lg:hidden" color="gray" pill onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </Button>
      </div>
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:flex lg:items-center  lg:gap-44 mt-4 lg:mt-0 lg:text-3xl `}
      >
        <Link
          to="/"
          className="block  lg:inline text-sm font-medium hover:text-orange-600"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="block lg:inline text-sm font-medium hover:text-orange-600"
        >
          About
        </Link>
        <Link
          to="/projects"
          className="block lg:inline text-sm font-medium hover:text-orange-600"
        >
          Projects
        </Link>
      </div>
    </Navbar>
  );
}
