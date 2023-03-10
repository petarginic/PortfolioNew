import React from 'react'
 import emailjs from "@emailjs/browser";
 import {useForm } from "react-hook-form"
 import { userSchema } from '../Validations/UserValidation';
 import { yupResolver } from '@hookform/resolvers/yup';

const Contact = () => {

    const {register, handleSubmit,reset, formState: {errors}} = useForm({
        resolver: yupResolver(userSchema),
    })

    const onSubmit = async (values) => {
            emailjs.send('service_mctwkb8', 'template_0afbw98', values,"66Rmv60krEdMA-VsZ")
            .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            window.alert("Message sent!")
            reset() 
            }, function(error) {
            console.log('FAILED...', error);
        });    
    }
    
    return (
        <div className="w-full h-screen bg-[#0a192f]" name="contact">
            <div className="max-w-[800px] mx-auto h-full w-full flex flex-col justify-center px-20  p-4 ">
                <h1 className="pb-5 text-[#6082B6] font-bold text-4xl sm:7xl">Contact</h1>
                <h1 className="pb-10 text-gray-300 font-bold">
                    You can fill the form or you can contact me on my email: petarginic@gmail.com
                </h1>
                <form
                    method="POST"
                    acceptCharset="UTF-8"
                    className="flex flex-col justify-center" 
                    onSubmit={handleSubmit(onSubmit)}                
                >
                    <input
                        type="text"
                        className="mb-4 w-full bg-gray-50 rounded-lg border border-gray-300 p-2 text-sm font-bold"
                        placeholder="Your name"
                        id="name"
                        {...register("name")}                       
                    />
                    <p className="pb-3 text-[#6082B6] font-bold">{errors?.name?.message}</p>
                    <input
                        type="email"
                        className="mb-4 w-full bg-gray-50 rounded-lg border border-gray-300 p-2 text-sm font-bold"
                        placeholder="Your email"
                        {...register("email")}                   
                    />
                    <p className="pb-3 text-[#6082B6] font-bold">{errors?.email?.message}</p>

                    <p className="pb-3 text-[#6082B6] font-bold"></p>
                    <textarea
                        type="text"
                        rows="4"
                        className="block p-2 w-full  text-gray-900 font-bold bg-gray-50 rounded-lg border border-gray-300 text-sm"
                        placeholder="Your message..."                  
                        id="message"
                        {...register("message")}
                        
                    ></textarea>
                    <p className="pb-3 text-[#6082B6] font-bold">{errors?.message?.message}</p>

                    <div className="flex flex-col justify-center">
                        <button type="submit" className="mt-6 flex justify-center items-center w-[100px] rounded-lg  text-white font-bold py-3 px-3  bg-[#6082B6]  hover:scale-110 duration-500">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
