import Image from "next/image";
// import "../../src/app/globals.css";


export default function Footer() {
    return (

        <footer className="bg-p-truegray-800">
        <div className="w-full py-8 px-4">
            <div className="mx-auto container overflow-hidden flex flex-col md:flex-row justify-between pb-4 text-center md:text-left">
                <a className="w-full md:w-1/4 flex justify-center items-center p-5" target="_blank" rel="noopener noreferrer">
                    <div className="m-2 w-24 h-24 rounded-md shadow-lg bg-p-red-50 flex justify-center items-center transform rotate-45 overflow-hidden">
                        <Image
                            width={100}
                            height={100}
                            className="object-fill h-auto w-auto transform -rotate-45"
                            alt="logo"
                            src="/images/logo-inv.png"
                        />
                    </div>
                </a>
                <div className="w-full mt-6 md:mt-0 leading-normal">
                    <h4 className="py-2 uppercase font-bold whitespace-pre-line text-p-white">About Project Name</h4>
                    <p className="text-lg whitespace-pre-line text-p-white">
                        Personalized Salesforce Services
                        At Nebula Tek, we offer tailored consulting and development in Salesforce to optimize customer relationship management (CRM), improve productivity, and maximize return on technology investment.
                    </p>
                </div>
                <div className="flex flex-col items-center w-full md:w-1/4 mt-6 md:mt-0">
                    <h4 className="inline-block py-2 px-3 uppercase font-bold text-center w-full whitespace-pre-line text-p-white">Links</h4>
                    <div className="flex flex-col pl-0 md:pl-4 justify-center items-center w-full">
                        <a href="#" target="_blank" className="flex items-center hover:underline whitespace-pre-line text-lg text-p-blue-200" rel="noopener noreferrer">Facebook</a>
                        <a href="#" target="_blank" className="flex items-center hover:underline whitespace-pre-line text-lg text-p-cyan-200" rel="noopener noreferrer">Twitter</a>
                        <a href="#" target="_blank" className="flex items-center hover:underline whitespace-pre-line text-lg text-p-red-300" rel="noopener noreferrer">YouTube</a>
                    </div>
                </div>
            </div>
            <div className="pt-4 mt-4 text-grey-darker text-xs border-t border-gray-500 text-center">
                <span className="whitespace-pre-line text-p-white">©2024 nebulatek.com All rights reserved.</span>
                <a href="#" target="_blank" className="inline-block py-2 px-3 whitespace-pre-line text-p-white" rel="noopener noreferrer">Privacy statement</a>
                <a href="#" target="_blank" className="inline-block py-2 px-3 whitespace-pre-line text-p-white" rel="noopener noreferrer">Terms of service</a>
                <a href="#" target="_blank" className="inline-block py-2 px-3 whitespace-pre-line text-p-white" rel="noopener noreferrer">Imprint</a>
            </div>
        </div>
    </footer>


)};