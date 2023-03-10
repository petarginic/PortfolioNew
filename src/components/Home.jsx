import React from 'react'
import { HiArrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
    return (
        <div name="home" className="w-full h-screen bg-[#0a192f] flex justify-center items-center">
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className="text-[#6082B6] font-bold text-2xl ">Hi, my name is</p>
                <h1 className="text-4xl sm:text-7xl font-bold text-gray-200"> Petar Ginic</h1>
                <h2 className="text-4xl sm:text-6xl font-bold text-gray-600">I am informatics engineer.</h2>
                <p className="text-[#6082B6] font-bold pt-4 max-w-[500px]">
                    Currently working as a system administrator, but programming is sphere where I found myself and
                    which I love the most. Mostly, I am focused on frontend development, building responsive
                    web-applications and web-sites. Check out my skills bellow.
                </p>

                <Link smooth={true} duration={500} to="skills">
                    <button className="mt-6 flex justify-center items-center w-[130px]  text-white font-bold py-3 px-3 border-2 hover:bg-[#6082B6] hover:border-[#6082B6] hover:scale-110 duration-500">
                        <p className="mr-2">View here</p> <HiArrowRight color="white" />
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Home
