
import { XCircleIcon } from "@heroicons/react/24/outline"
import { memo, useMemo } from "react";
import { NavLink } from "react-router-dom";

const Service_card = ({  values = {}, onClick_toggle = () => "", id = "", activeDetailsToggle = "", setActiveDetailsToggle = () => "", activeDetails = {} }) => {

    const gender = useMemo(()=>{
       return activeDetails.gender?.map((g, gi) => {
            return <span key={gi} className="w-max px-2 py-0.5 text-xs text-gray-300 border rounded-sm">{g}</span>
        })
    },[activeDetails])

    const size = useMemo(()=>{
        return activeDetails.size?.map((g, gi) => {
             return <span key={gi} className="w-max px-2 py-0.5 text-xs text-gray-300 border rounded-sm">{g}</span>
         })
     },[activeDetails])

     const color = useMemo(()=>{
        return activeDetails.size?.map((g, gi) => {
             return <span key={gi} className="w-max px-2 py-0.5 text-xs text-gray-300 border rounded-sm">{g}</span>
         })
     },[activeDetails])

    return (
        <>
            <div id={id} className={`col-span-12 lg:col-span-6 p-8 h-max shadow-sm hover:shadow-lg my-3 rounded-md ${activeDetailsToggle ? "fixed min-h-[80vh] w-[90vw] left-[5vw] top-[12vh] z-10 bg-white " : ""}`}>

                <XCircleIcon onClick={() => setActiveDetailsToggle(false)} className={`w-8 stroke-orange-500 absolute right-8 hover:stroke-orange-600 top-6 z-10 cursor-pointer ${activeDetailsToggle ? "block" : "hidden"}`} />

                <div className="service_icon">
                    <img src={values.image} className="w-16 aspect-square object-cover" alt="" />
                </div>

                <h6 className="service_title text-orange-500 text-md font-bold text-left mt-4 capitalize">{values.title}</h6>

                <p className={`service_details text-xs text-gray-500 text-left mt-2 h-max ${activeDetailsToggle ? "line-clamp-12" : "line-clamp-3"}`}
                    title={values.description}>
                    {values.description}
                </p>

                {activeDetailsToggle && <div className="w-full flex flex-col h-max">
                    <span className="flex flex-wrap gap-x-2 w-full mt-4">
                        {gender}
                    </span>
                    <span className="flex flex-wrap gap-x-2 w-full mt-2">
                        {size}
                    </span>
                    <span className="flex flex-wrap gap-x-2 w-full mt-2">
                        {color}
                    </span>
                </div>
                }
                <div className="flex w-full justify-start gap-x-5 mt-5">
                    <button  onClick={() => onClick_toggle(values)} className="text-sm bg-orange-400 hover:bg-white hover:text-orange-400 border-orange-400 border text-white px-3 py-0.5 rounded-sm">{activeDetailsToggle ? "Close" : "See More"}</button>
                    <NavLink to={`/${values.type === "service" ? "book" : "order"}`} className="text-sm border border-orange-300 text-orange-300 px-3 py-0.5 rounded-sm">{values.type === "product" ? "Order" : "Book"}</NavLink>
                </div>
            </div>
        </>
    )
};

export default memo(Service_card);