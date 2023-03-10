import React from 'react'
import html from './../assets/html.png'
import css from './../assets/css.png'
import sass from './../assets/sass.png'
import javascript from './../assets/javascript.png'
import react from './../assets/react.png'
import tailwind from './../assets/tailwind.png'
import python from './../assets/python.png'

import { HiArrowRight } from 'react-icons/hi'

const Skills = () => {
    return (
        <div name="skills" className="w-full min-h-screen h-fit bg-[#0a192f]">
            <div className="max-w-[1000px] mx-auto h-full w-full flex flex-col justify-center px-20  p-4">
                <div className="flex flex-col flex-end  items-start mt-10">
                    <p className="text-[#6082B6]  font-bold text-4xl">Experiance</p>
                    <p className="text-gray-400 text-2xl font-bold py-2">
                        These are techologies that I have worked with
                    </p>
                </div>

                <div className="w-full h-full grid grid-cols-2 sm:grid-cols-4 pt-20 gap-10 py-8  ">
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img src={html} alt="html" className="w-20 mx-auto p-2" />
                        <p className="text-gray-300 font-bold text-center">HTML</p>
                    </div>

                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img src={css} alt="css" className="w-20 mx-auto p-2" />
                        <p className="text-gray-300 font-bold text-center">CSS</p>
                    </div>

                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img src={sass} alt="sass" className="w-20 mx-auto p-2" />
                        <p className="text-gray-300 font-bold text-center">SASS</p>
                    </div>

                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img src={tailwind} alt="tailwind" className="w-20 mx-auto p-2" />
                        <p className="text-gray-300 font-bold text-center">Tailwind</p>
                    </div>

                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img src={javascript} alt="javascript" className="w-20 mx-auto p-2" />
                        <p className="text-gray-300 font-bold text-center">JavaScript</p>
                    </div>

                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img src={react} alt="react" className="w-20 mx-auto p-2" />
                        <p className="text-gray-300 font-bold text-center">ReactJS</p>
                    </div>

                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img src={python} alt="python" className="w-20 mx-auto p-2" />
                        <p className="text-gray-300 font-bold text-center">Python</p>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center pt-20">
                    <p className="text-[#6082B6] font-bold text-3xl md:text-5xl text-center ">Check out my GitHub</p>
                    <a href="https://github.com/petarginic">
                        <button className="mt-6 flex justify-center items-center w-[160px]  text-white font-bold py-3 px-3 border-2 hover:bg-[#6082B6] hover:border-[#6082B6] hover:scale-110 duration-500">
                            <p className="mr-2">View here</p> <HiArrowRight color="white" />
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Skills
