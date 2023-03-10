import { useState } from 'react'
import { Link } from 'react-scroll'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import logo5 from './../assets/logo5.png'

const Navbar = () => {
    const [navActive, setNavActive] = useState(false)

    const handleOnClick = () => {
        setNavActive(!navActive)
    }
    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
            {/* Logo */}
            <Link to="home" smooth="true" duration={500}>
                <div className="flex justify-center items-center cursor-pointer">
                    <img src={logo5} alt="logo" className="w-[55px] z-10" />
                    <p className=" ml-1 font-extrabold text-[#6082B6]">P.G</p>
                </div>
            </Link>

            {/* Menu */}
            <ul className="hidden md:flex">
                <li className="font-bold hover:text-[#6082B6]">
                    <Link to="home" smooth="true" duration={500}>
                        Home
                    </Link>
                </li>
                <li className="font-bold hover:text-[#6082B6]">
                    <Link to="about" smooth="true" duration={500}>
                        About
                    </Link>
                </li>
                <li className="font-bold hover:text-[#6082B6]">
                    <Link to="skills" smooth="true" duration={500}>
                        Skills
                    </Link>
                </li>
                <li className="font-bold hover:text-[#6082B6]">
                    <Link to="contact" smooth="true" duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Hamburger */}
            <div className="md:hidden z-10 cursor-pointer">
                {!navActive ? <FaBars onClick={handleOnClick} /> : <FaTimes onClick={handleOnClick} />}
            </div>

            {/* Mobile menu */}
            <ul
                className={
                    !navActive
                        ? 'hidden'
                        : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
                }
            >
                <li className="py-6 font-bold">
                    <Link onClick={handleOnClick} to="home" smooth="true" duration={500}>
                        HOME
                    </Link>
                </li>
                <li className="py-6 font-bold">
                    <Link onClick={handleOnClick} to="about" smooth="true" duration={500}>
                        ABOUT
                    </Link>
                </li>

                <li className="py-6 font-bold">
                    <Link onClick={handleOnClick} to="about" smooth="true" duration={500}>
                        SKILLS
                    </Link>
                </li>

                <li className="py-6 font-bold">
                    <Link onClick={handleOnClick} to="contact" smooth="true" duration={500}>
                        CONTACT
                    </Link>
                </li>
            </ul>

            {/* Social icons*/}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0 ">
                <ul>
                    <li className="bg-blue-600 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
                        <a
                            className="flex justify-between items-center w-full text-gray-300"
                            href="https://www.linkedin.com/in/petar-ginic/"
                        >
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>

                    <li className="bg-gray-700 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
                        <a
                            className="flex justify-between items-center w-full text-gray-300"
                            href="https://github.com/petarginic"
                        >
                            GitHub <FaGithub size={30} />
                        </a>
                    </li>

                    <li className="bg-red-700 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
                        <a
                            smooth="true"
                            duration={500}
                            className="flex justify-between items-center w-full text-gray-300"
                            href="mailto:petarginic@mail.com"
                        >
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>

                    <li className="bg-green-800 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
                        <a
                            smooth="true"
                            duration={500}
                            className="flex justify-between items-center w-full text-gray-300 "
                            href="tel:0648410216"
                        >
                            Phone <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
