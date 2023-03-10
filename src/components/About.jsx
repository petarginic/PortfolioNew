import React from 'react'
import image from './../assets/image.jpg'

const About = () => {
    return (
        <div name="about" className="w-full min-h-screen h-fit bg-[#0a192f]">
            <div className="flex flex-col items-center">
                <h1 className="text-[#6082B6] font-bold text-center text-2xl md:text-4xl mt-10">
                    I am Petar, the developer of this website!
                </h1>
            </div>

            <div className="flex flex-col items-center">
                <h1 className="text-gray-300 border-b-4 border-b-[#6082B6] font-bold text-2xl md:text-4xl mt-20 ">
                    About me
                </h1>
            </div>

            <div className="max-w-[1000px] mx-auto h-full w-full flex flex-col justify-center px-20">
                <div className="max-w-[1000px] mx-auto mt-10">
                    <div className="grid md:grid-cols-3 gap-6 justify-items-center items-center">
                        <div className="col-span-2">
                            <p className="text-gray-400 font-bold ">
                                Hello, my name is Petar, I am 30 years old, and I live in Belgrade. In 2019. I graduated
                                at MEF faculty and earned a title of Informatics engineer.I am occupied with IT
                                development, learning new programming languages and other techologies. In future, I see
                                myself as a full stack developer and always seeking for more knowledge and skills.
                                Although programming is a field that advances day by day and constantly improves, I
                                enjoy researching and learning new things, and these novelties motivate me further.
                                Except programming, I have a wide range of interests like gym and street workout,
                                football, solving puzzle games,traveling..
                            </p>
                        </div>
                        <div>
                            <img
                                src={image}
                                alt="about"
                                className="w-[200px] h-[250px] hidden md:flex object-top rounded-lg"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <h1 className="text-gray-300 border-b-4 text-center border-b-[#6082B6] font-bold text-[20px] md:text-4xl  mt-20 ">
                        Education
                    </h1>
                </div>

                <div className="max-w-[1000px] mx-auto mt-10">
                    <div className="flex justify-center items-center">
                        <p className="text-gray-400 font-bold ">
                            In 2011, I encountered programming for the first time, more precisely with a programming
                            language C. At university I encountered other languages like Java,PHP, Python. In 2019, I'm
                            returning to programming, more precisely to what I love the most. I finished the course
                            "Learning Python", "Python Advanced with Flask" on Udemy, other online courses, but I wanted
                            to combine all with Frontend. In 2021. started learning ReactJS. Finished a course "ReactJS
                            advanced - Udemy" and "Frontend Web Development Bootcamp Course". Currently I am on Quantox
                            academy, eager to establish and consolidate knowledge. This website is made using ReactJS.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
