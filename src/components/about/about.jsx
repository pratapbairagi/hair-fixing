import front_face from "./images/front_face.jpg"
import left_face from "./images/left_face.jpg"
import right_face from "./images/right_face.jpg"

const About = () => {
    return (
        <>
            <div className=" flex flex-col col-span-12 pt-10 py-16">
                <h5 className="#222222 text-xl font-bold w-full text-center"> About <span className="text-[#fa7436] text-xl font-bold"> Us </span> </h5>

                {/* <p className="text-gray-600 text-md mt-3 min-w-[240px] max-w-[70%] mx-auto">We provide other services except hair fixing. click on each servic to know more details.</p> */}

                <div className="grid grid-cols-12 mt-10">
                    <div className="col-span-12 lg:col-span-6 flex justify-center relative bg-gray-100 py-8">
                        <img src={left_face} className="absolute h-[20vh] lg:h-[30vh] p-2 rounded-full bg-white" style={{ transform: "translateX(-100%)" }} alt="" />
                        <img src={right_face} className="absolute h-[20vh] lg:h-[30vh] top-[37vh] p-2 rounded-full bg-white" style={{ transform: "translateX(100%)" }} alt="" />
                        <img src={front_face} className=" h-[50vh] lg:h-[60vh] p-3 rounded-full" style={{ boxShadow: "0 0 0 2px orange" }} alt="" />
                    </div>

                    <div className="col-span-12 lg:col-span-6 flex flex-col bg-orange-400 py-8 relative z-10">
                        <h5 className="#222222  font-semibold w-full text-center lg:text-start text-lg px-8 relative z-10"> We offer the best hair wig treatment <span className="text-[#ffff] text-xl font-bold"> in West Bengal </span> </h5>

                        <p className="text-md text-gray-100 mt-6 px-8 py-4 text-start shadow-sm max-w-[90%] ml-2 relative z-10" style={{ background: "rgba(255, 255, 255, 0.233)" }}>
                            <p className="text-md text-gray-100 px-8 py-4 text-start shadow-sm min-w-[98%] left-6 h-full bg-transparent mx-auto absolute z-10 absolute" style={{ background: "rgba(255, 255, 255, 0.233)" }}>
                            </p>
                            Hair Patch is a top molded patch made up of normal hair which is utilized to cover baldness. Hair Patch is the best treatment for male baldness. When hair development isn’t conceivable from medications and a man can’t stand to go for hair transplantation (as it is a surgical method), Hair Patch (Non Surgical Method) is the most secure and least demanding method to hide baldness & to have an awesome hair style. We offer the best hair patch treatment in West Bengal.
                        </p>

                        <div className="h-[150%] w-20 bg-white z-0 absolute left-[103%] -top-24 hidden lg:block" style={{ transform: "rotate(40deg)" }}></div>
                        {/* <div className="h-[150%] w-10 bg-orange-500 absolute left-[60%] -top-24 hidden lg:block" style={{transform:"rotate(30deg)"}}></div> */}
                        {/* <div className="h-[150%] w-32 bg-orange-500 absolute -left-[16%] -top-16 hidden lg:block" style={{transform:"rotate(30deg)"}}></div> */}



                    </div>
                </div>
            </div>
        </>
    )
};

export default About;