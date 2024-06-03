import hairPatch1 from "./hair_patch-removebg_preview.png";
import hairPatch2 from "./hair_patch_half_hair.png";
import hairPatch3 from "./hair_patch_half_bald.png";
import hair1_ from "./patch1_.png";
import hair2_ from "./patch2_.png";
import hair3_ from "./patch3_.png";
import hair4_ from "./patch4_.png";

const HeroSection = () => {
    return (
        <div className="bg-white col-span-12 ">
            <div className="mx-auto max-w-7xl py-10 sm:px-6 lg:px-8">
                <div className="relative isolate overflow-hidden px-6 py-10 lg:py-8 shadow-xl sm:rounded-3xl sm:px-16 grid grid-cols-12 lg:gap-x-20 lg:px-24 min-h-[70vh] lg:min-h-none">
                    {/* <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg> */}
                    <img src={hairPatch3} className="block lg:hidden absolute left-0 h-[65vh] bottom-0 z-0 opacity-30" alt="" />
                    {/* <img src={hairPatch2} className="block lg:hidden absolute right-0 h-[75vh] bottom-0 z-0 opacity-20" alt="" /> */}

                    <ul className="flex lg:hidden gap-x-2 absolute left-[50%] top-8" style={{transform:"translate(-50%, 0)"}}>
                        <li className="w-16 border border-2 border-red-400 aspect-square rounded-full overflow-hidden">
                            <img src={hair2_} className="w-[100%]" alt="" />
                        </li>
                        {/* <li className="w-16">
                            <img src={hair1_} className="w-[100%]" alt="" />
                        </li> */}
                        <li className="w-16 border border-2 border-red-400 aspect-square rounded-full overflow-hidden">
                            <img src={hair3_} className="w-[100%]" alt="" />
                        </li>
                        <li className="w-16 border border-2 border-red-400 aspect-square rounded-full overflow-hidden">
                            <img src={hair4_} className="w-[100%]" alt="" />
                        </li>
                        
                    </ul>

                    <div className="absolute -right-10 hidden lg:block rounded-full min-w-[50vw] aspect-square z-10" style={{boxShadow:"-3px 6px white, -30px 3px gray",borderBottomRightRadius:"0", borderTopRightRadius:"0" }}></div>

                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 left-0" viewBox="0 0 1440 320">
                        <path className="fill-gray-800 opacity-30 flex lg:hidden" fill-opacity="1" d="M0,288L120,293.3C240,299,480,309,720,272C960,235,1200,149,1320,106.7L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
                    </svg>

                    <div className="mx-auto min-h-[70vh] lg:min-h-none lg:mt-0 order-2 lg:order-1 col-span-12 lg:col-span-6 max-w-md text-center lg:mx-0 flex flex-col justify-center lg:flex-auto lg:py-28 lg:text-left relative z-10 lg:static">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            <span className="text-red-600"> NO PAIN </span>
                            <br />
                            <span className="text-gray-900"> HAIR SOLUTION </span>
                        </h2>
                        <p className="mt-6 text-lg leading-6 lg:leading-8 text-gray-400">
                            Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                            <a
                                href="#"
                                className="rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-gray-100 shadow-sm hover:bg-gray-700 hover:text-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                Get started
                            </a>
                            <a href="#" className="text-sm font-semibold leading-6 text-red-400">
                                Learn more <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                    <div className="relative hidden lg:flex items-center order-1 lg:order-2 justify-end mt-1 h-max aspect-square lg:mt-0 col-span-12 lg:col-span-6 overflow-hidden">
                        <img
                            className=" left-0 top-0 h-full max-w-none  rounded-md ring-1 ring-white/10  relative z-20"
                            src={hairPatch1}
                            alt="App screenshot"
                            style={{ aspectRatio: "1/1" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HeroSection;