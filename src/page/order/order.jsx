
import { useLocation } from "react-router-dom";
import Heading from "../../components/headig/headig";
import Input from "../../components/input/input";
import Paragraph from "../../components/paragraph/paragraph";
import TextArea from "../../components/textArea/textArea";
import orderImg from "./images/order_img.jpg"
import { useEffect, useState } from "react";
import useFormDataState from "../../helper/formData/formData";
import OptionSelect from "../../components/optionSelect/optionSelect";

import { jsPDF } from "jspdf"
import axios from "axios";
import  DropboxChooser  from 'react-dropbox-chooser';

const Order = () => {
    const location = useLocation();
    const fieldsetClassName = "col-span-12 md:col-span-6 md:px-2 flex flex-col  mt-4 md:mt-6 gap-y-1";
    const labelClassName = "text-xs text-gray-500 font-semibold block text-start";
    const inputClassName = "block text-sm px-2 py-0.5 text-gray-400 rounded-sm bg-gray-100";

    const fieldsetClassNameForSelectOption = "col-span-6 md:col-span-4 px-2 md:px-2 flex flex-col  mt-4 md:mt-6 gap-y-1";

    const [orderData, setOrderData] = useFormDataState({});

    useEffect(() => {
        setOrderData({
            ...orderData,
            product: location.state.title,
            type: location.state.type,
            size: location.state.size,
            color: location.state.color
        });
    }, []);

    const accessToken = "sl.B2-RF35aXtbiRTw06f3JX_91Z-9vFzHhXDM5nekR5jCp9uFJMxLI3InOF9A6Dnx4BolMAdXplZwpCbksNGfO4I2UpapbzS2jAL86qTkVWRPSHyeVm_4IPmkgZigTJ7aA2_gzEhfpSidY"
    const app_key = "hz1by84zhl364t6"


    const formInputHandler = (e) => {
        const { name, value } = e.target;
        setOrderData({
            ...orderData,
            [name]: value
        })
    };

    const doc = new jsPDF();

    const onSubmit_handler = async () => {

        try {
            doc.text(20, 20, `Name : ${orderData.name}`)
            doc.text(20, 30, `Number : ${orderData.number}`)
            doc.text(20, 40, `Product : ${orderData.product}`)
            doc.text(20, 50, `type : ${orderData.type}`)
            doc.text(20, 60, `size : ${orderData.size}`)
            doc.text(20, 70, `color : ${orderData.type}`)
            doc.text(20, 80, `color : ${orderData.details}`)

            const pdfDataUri = doc.output("datauristring");
            // const pdfFile = new File([pdfDataUri], `${location.state.product_type}_${orderData.type}_order${Date.now()}.pdf`, { type: 'application/pdf' });

           const downloadUrl = await uploadFile(pdfDataUri);

           console.log("url ", downloadUrl)


        } catch (error) {
            console.log(error)

        }
    }

    async function uploadFile(file) {
        try {
            
        

        const downloadingUrl = await axios.post('https://content.dropboxapi.com/2/files/upload', file, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/octet-stream',
                'Dropbox-API-Arg': JSON.stringify({ path: `/uploads/${file.name}` }) // Specify the upload path
              }
        })
            .then(response => {
                const downloadUrl = response.data.path_lower;

                return downloadUrl
            })
            .catch(error => {
                return error
            });

        return downloadingUrl;

    } catch (error) {
            return error
    }
    };


    console.log("booking data > ", location.state)
    return (
        <>
            <div className="w-full h-max bg-gray-100 h-max min-h-[108vh]">
                <div className="flex flex-col md:flex-row md:gap-x-3 justify-center items-center relative bg-white w-[90vw] min-h-[92vh] md:min-h-[86vh] left-[5vw] top-[14vh] rounded-md shadow-md">
                    <div className="absolute bg-orange-400  w-full md:w-[18vw] top-0 h-[20%] md:h-[100%] rounded-md md:right-0"></div>

                    <div className="order-2 md:order-1 h-max min-h-[55vh] md:min-h-[88%] md:w-[65%] w-[78vw] bg-transparent mx-auto md:mx-0 z-10 grid grid-cols-12" style={{ placeContent: "flex-start" }}>

                        <Heading
                            headingClassName="text-gray-800 font-bold flex gap-x-1 text-lg text-start col-span-12 px-3 mt-4 md:mt-0"
                            headingText="Order"
                            headigSpan1Text="Details"
                            headingSpan1ClassName="text-orange-500"
                        />

                        <Paragraph
                            pragraphClassName="text-gray-400 flex text-sm text-start col-span-12 px-3"
                            paragraphText="Fill all necessary details related to order !" paragraphTitle="Fill all necessary details related to order !"
                        />

                        <Input inputOnchangeFun={formInputHandler} inputName="name" inputType="text" inputDefaultValue="" labelHtmlFor="#name" labelText="Name" fieldsetClassName={fieldsetClassName} labelClassName={labelClassName} inputClassName={inputClassName} />

                        <Input inputOnchangeFun={formInputHandler} inputName="number" inputType="tel" inputDefaultValue="" labelHtmlFor="#number" labelText="Number" fieldsetClassName={fieldsetClassName} labelClassName={labelClassName} inputClassName={inputClassName} />

                        <Input inputOnchangeFun={formInputHandler} inputName="product" inputType="text" inputDefaultValue={orderData.product} labelHtmlFor="#product" labelText="Product" fieldsetClassName={fieldsetClassName} labelClassName={labelClassName} inputClassName={inputClassName} />

                        <div className="md:col-span-6"></div>

                        <OptionSelect selectOptionFun={formInputHandler} inputName="type" values={location.state.type} value="" labelHtmlFor="#type" labelText="Type" fieldsetClassName={fieldsetClassNameForSelectOption} labelClassName={labelClassName} inputClassName={inputClassName} />

                        <OptionSelect selectOptionFun={formInputHandler} inputName="size" values={location.state.size} value="" labelHtmlFor="#size" labelText="Size" fieldsetClassName={fieldsetClassNameForSelectOption} labelClassName={labelClassName} inputClassName={inputClassName} />

                        <OptionSelect selectOptionFun={formInputHandler} inputName="color" values={location.state.color} value="" labelHtmlFor="#color" labelText="Color" fieldsetClassName={fieldsetClassNameForSelectOption} labelClassName={labelClassName} inputClassName={inputClassName} />


                        <TextArea
                            fieldsetClassName="col-span-12 md:col-span-12 md:px-2 flex flex-col mt-2 md:mt-3 gap-y-1"
                            labelClassName="text-xs text-gray-500 font-semibold block text-start"
                            labelText="Describe your requirement"
                            labelHtmlFor="#details"
                            textareaClassName="block text-sm px-2 py-0.5 text-gray-400 rounded-sm bg-gray-100"
                            textareaName="details"
                            textareaText=""
                            textareaOnchangeFun={formInputHandler}
                        />

                        <button onClick={onSubmit_handler} className="w-full md:w-[98%] mx-auto text-nowrap col-span-12 text-center py-1 mt-3 md:mt-6 bg-orange-400 text-gray-100 font-semibold">
                            <DropboxChooser
                                appKey={app_key}
                                // success={handleSuccess}
                                success={onSubmit_handler}
                                cancel={() => console.log('Selection cancelled')}
                                multiselect={false}
                                extensions={['.pdf']} // Optional: limit file types
                                linkType="direct" // Optional: specify link type
                            >
                                <button>Choose PDF from Dropbox</button>
                            </DropboxChooser>
                        </button>

                    </div>
                    <div className="order-1 md:order-2 h-max min-h-[18vh] md:min-h-[88%] md:w-[27%] w-[78vw] mx-auto md:mx-0 z-10 shadow-md mt-4 md:mt-0" style={{ boxShadow: "0 0 0 6px white" }}>
                        <img src={orderImg} className="h-[20vh] md:min-h-[70vh] w-[100%] object-cover shadow-md" alt="" />
                    </div>

                </div>
            </div>
        </>
    )
};

export default Order;