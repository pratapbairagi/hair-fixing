
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { XCircleIcon, ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline"
import { memo, useEffect, useMemo, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Service_card = ({  values = {}, onClick_toggle = () => "", id = "", activeDetails = {} }) => {

    const navigate = useNavigate()

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
        return activeDetails.color?.map((g, gi) => {
             return <span key={gi} className="w-max px-2 py-0.5 text-xs text-gray-300 border rounded-sm">{g}</span>
         })
     },[activeDetails])

     const type = useMemo(()=>{
        return activeDetails.type?.map((g, gi) => {
             return <span key={gi} className="w-max px-2 py-0.5 text-xs text-gray-300 border rounded-sm">{g}</span>
         })
     },[activeDetails]);


     const [isScrollAvail, setIsScrollAvail] = useState({
        left : false,
        right : false
     });
     const scrollContainer = useRef(null);


     const updateButtons = () => {
     let { scrollLeft, scrollWidth, clientWidth } = scrollContainer.current;
        setIsScrollAvail({ left : scrollLeft > 0, right : scrollWidth - clientWidth - scrollLeft > 0});
      };

     useEffect(()=>{
        if(activeDetails.title){
        scrollContainer.current.addEventListener('scroll', updateButtons);
        }

        if(activeDetails.title && !isScrollAvail.left && !isScrollAvail.right){
            updateButtons()
        }
     },[activeDetails])

    return (
        <>
            <div id={id} className={`col-span-12 lg:col-span-6 p-8 h-max shadow-sm hover:shadow-lg my-3 rounded-md`}>

               <XCircleIcon id={`${id}toggle_btn`} onClick={() => onClick_toggle({ id : id, values : values })} className={`w-8 stroke-orange-500 right-8 hover:stroke-orange-600 top-6 z-10 cursor-pointer ml-auto hidden `} /> 

                <div className="service_icon">
                    <img src={values.image} className="w-16 aspect-square object-cover" alt="" />
                </div>

                <h6 className="service_title text-orange-500 text-md font-bold text-left mt-4 capitalize">{values.title}</h6>

                <p id={id+"p"} className={`service_details text-xs text-gray-500 text-left mt-2 h-max line-clamp-3`}
                    title={values.description}>
                    {values.description}
                </p>

               {activeDetails.title && <div  className="w-full flex flex-col h-max gap-y-1">
                    <span className="flex flex max-w-[100%] overflow-x-auto gap-x-2 w-full mt-4 gap-y-2 text-nowrap">
                        {gender}
                    </span>
                    <span className="flex flex max-w-[100%] overflow-x-auto gap-x-2 w-full gap-y-2 text-nowrap">
                        {size}
                    </span>
                    <span className="flex flex max-w-[100%] overflow-x-auto gap-x-2 w-full gap-y-2 text-nowrap">
                        {color}
                    </span>
                    
                    <span className="w-full flex relative">
                       { isScrollAvail.left && activeDetails.type.length > 0 && <ChevronLeftIcon className="w-5 font-bold fill-orange-500 absolute left-0"/>}
                    <span ref={scrollContainer} className="flex flex max-w-[100%] w-max overflow-x-auto gap-x-2 w-full gap-y-2 text-nowrap relative " style={{scrollbarWidth:"none"}}>
                        {type}
                    </span>
                       {isScrollAvail.right && activeDetails.type.length > 0 &&  <ChevronRightIcon className="w-5 font-bold fill-orange-500 top-0.5 absolute right-0"/>}
                    </span>
                </div>
}                
                <div className="flex w-full justify-start gap-x-5 mt-5">
                    <button  onClick={() => onClick_toggle({ id : id, values : values })} className="text-sm bg-orange-400 hover:bg-white hover:text-orange-400 border-orange-400 border text-white px-3 py-0.5 rounded-sm">{activeDetails.title ? "Close" : "See More"}</button>
                    <button onClick={()=>{
                        navigate(`/${values.product_type === "service" ? "booking" : "order"}`, { state : values })
                    }} className="text-sm border border-orange-300 text-orange-300 px-3 py-0.5 rounded-sm">{values.product_type === "product" ? "Order" : "Book"}</button>
                </div>
            </div>
        </>
    )
};

export default memo(Service_card);