"use client";
import Image from "next/image";
// import { useLanguage } from "../context/LenguajeContext.js";
import { useTranslation } from "react-i18next"; 
import Link from "next/link";


export default function Footer() {
    // const { changeLanguage } = useLanguage();
    const { t } = useTranslation(); 

    return (

<footer  className="text-p-gray-600  bg-p-gray-100">
    <div  className="container px-5 pt-8 mx-auto">
        <div  className="flex flex-wrap md:text-left text-center mb-4">
            <div  className="lg:w-1/4 md:w-1/2 w-full pr-4">
                <Link href="#" className="text-center">
                <div className="m-2 w-20 h-20 flex justify-center items-center">
                        <Image
                            width={50}
                            height={50}
                            className="object-fill h-auto w-auto transform"
                            alt="logo"
                            src="/images/logo-png.svg"     
                        />
                    </div>
                </Link>
                <div  className="text-sm md:text-left text-center flex flex-col mt-4">
                    <Link href="#" className="inline-block my-1 whitespace-pre-line">Privacy statement</Link>
                    <Link href="#" className="inline-block my-1 whitespace-pre-line"> Terms of service</Link>
                    <Link href="#" className="inline-block my-1 whitespace-pre-line">Imprint</Link>
                </div>
                <div  className="text-sm md:text-left text-center flex flex-row mt-8">
                    <span   className="flex"> OSA is a trending product ©2025 <br/> All rights reserved.  </span>
                </div>
            </div>
            <div  className="lg:w-1/4 w-1/2">
                <h2   className="title-font font-medium text-p-gray-900 tracking-widest text-sm mb-3">WORK</h2>
                <div  className="flex flex-col mb-10">
                    <Link href="#" className="text-p-gray-600 hover:text-p-gray-800 my-1">Ad Campaigns</Link>
                    <Link href="#" className="text-p-gray-600 hover:text-p-gray-800 my-1">Branding</Link>
                    <Link href="#" className="text-p-gray-600 hover:text-p-gray-800 my-1">Case Studies</Link>
                    <Link href="#" className="text-p-gray-600 hover:text-p-gray-800 my-1">Website Design</Link>
                </div>
            </div>
            <div  className="lg:w-1/4 w-1/2">
                <h2   className="title-font font-medium text-p-gray-900 tracking-widest text-sm mb-3">SOCIAL</h2>
                <div  className="flex flex-col mb-10">
                    <Link href="#" className="text-p-gray-600 hover:text-p-gray-800 my-1">About</Link>
                    <Link href="#" className="text-p-gray-600 hover:text-p-gray-800 my-1">Blog</Link>
                    <Link href="#" className="text-p-gray-600 hover:text-p-gray-800 my-1">Job Openings</Link>
                    <Link href="#" className="text-p-gray-600 hover:text-p-gray-800 my-1">Marketing</Link>
                    <Link href="#" className="text-p-gray-600 hover:text-p-gray-800 my-1">SEO &amp; SEM</Link>
                    <Link href="#" className="text-p-gray-600 hover:text-p-gray-800 my-1">Virtual Reality</Link>
                    <Link href="#" className="text-p-gray-600 hover:text-p-gray-800 my-1">AI Marketing</Link>
                </div>
            </div>
            <div  className="lg:w-1/4 md:w-1/2 w-full">
                <h2   className="title-font font-medium text-p-gray-900 tracking-widest text-sm mb-2">FEATURED POSTS</h2>
                <div  className="flex flex-col pb-4">
                    <div  className="w-full my-1 text-center">
                        <div className="relative block text-left overflow-hidden shadow-lg my-2 text-p-indigo-800  bg-color-yellow min-h-[100px]">
                            <div  className="relative h-full flex flex-col justify-between">
                                <p   className="uppercase px-6 py-2 font-semibold text-xs text-p-white whitespace-pre-line">Category</p>
                                <div   className="px-6 font-bold text-lg text-p-gray-100 whitespace-pre-line">Another Fantastic Title</div>
                            </div>
                        </div>
                    </div>
                
                    <div  className="w-full my-1 text-center">
                        <div className="relative block text-left overflow-hidden shadow-lg my-2 text-white  bg-color-blue">
                            <div  className="relative h-full flex flex-col justify-between">
                                <p   className="uppercase px-6 py-2 font-semibold text-xs text-white whitespace-pre-line">Category</p>
                                <div   className="px-6 font-bold text-lg mb-8 text-p-white whitespace-pre-line">One Fantastic Title that is lightly longer</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
)};