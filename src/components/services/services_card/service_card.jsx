


const Service_card = ({img="", title="", details=""}) => {
    return (
        <>
            <div className="min-w-[100%] lg:min-w-[20%] max-w-[300px] p-8 h-max shadow-sm hover:shadow-lg my-3">
                        <div className="service_icon">
                            <img src={img} className="w-16 border" alt="" />
                        </div>
                        <h6 className="service_title text-gray-800 text-md font-bold text-left mt-4">{title}</h6>
                        <p className="service_details line-clamp-3 text-xs text-gray-600 text-left mt-2"
                        title={details}>
                        {details}
                        </p>
                    </div>
        </>
    )
};

export default Service_card;