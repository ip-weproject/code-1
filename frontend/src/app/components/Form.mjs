"use-client";
import Image from "next/image";
import "../globals.css";

function Form () {
    return ( 
<section className="text-p-gray-700  flex lg:flex-row flex-col items-stretch">
<div className="lg:w-1/2 lg:px-24 py-6 px-2 flex flex-col lg:items-start lg:text-left items-center text-center">
    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-color-cian">Lets talk</h1>
    <p className="mb-8 leading-relaxed">Subscribe to our newsletter to get the latest stories of our work and many happy customer testimonials. Want to be our customer? Enter your email below.</p>
    <form method="POST"  className="flex flex-col lg:justify-start justify-center w-full max-w-md p-2">
        <textarea  className="focus:outline-none shadow-lg border-2 border-gray-300 mb-4 py-2 px-3" rows="4" placeholder="Your message here..."></textarea>
        <div  className="flex flex-row justify-between shadow-lg border-2 border-gray-300">
        <input  className="flex-grow bg-white focus:outline-none px-4 m-0" placeholder="Email" name="email" type="email" />
        <button className="inline-flex text-p-black font-semibold py-2 px-6 focus:outline-none text-md m-0 h-12 bg-p-gray-300">Send Message</button>
        </div>
    </form>
    <div className="text-sm mt-2 text-p-gray-500 mb-8 w-full">Keep in tough with us.</div>
    <div  className="flex flex-row ">
        <a target="_blank"  className="mx-2 text-p-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-color-blue"> <i  className="fab fa-linkedin-in"></i> </a>
        <a target="_blank"  className="mx-2 text-p-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-color-blue"> <i  className="fab fa-facebook-f"></i> </a>
        <a target="_blank"  className="mx-2 text-p-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-color-blue"> <i  className="fab fa-twitter"></i> </a>
        <a target="_blank"  className="mx-2 text-p-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-color-blue"> <i  className="fab fa-youtube"></i> </a>
    </div>
</div>
<div  className="flex justify-center lg:w-1/2 w-full items-stretch --background">
    <Image  className="object-center flex" 
            priority 
            pazly-editable="src child"
            width={200} 
            height={200} 
            alt="form" 
            src="/images/portada-svg.svg"/>
</div>
</section>
     );
}

export default Form;