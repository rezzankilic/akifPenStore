import React from 'react'
import { GrInstagram } from "react-icons/gr";
import { BsFacebook } from "react-icons/bs";
import { FaTwitterSquare} from "react-icons/fa";


export default function Footer() {
  return (
    <div>
        <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-yellow-700">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="/" className="flex items-center mb-4 sm:mb-0">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-gray-200">Arslan Pen Store</span>
                </a>

                <div className="flex justify-between items-center pt-7 mr-64">
                    <div className="ml-auto dark:text-gray-200"><a href="https://www.instagram.com/" className="mr-4 hover:underline md:mr-8">< GrInstagram /> </a></div>
                    <div className="ml-auto dark:text-gray-200"><a href="https://www.facebook.com/" className="mr-4  hover:underline md:mr-8"> <BsFacebook /> </a></div>
                    <div className="ml-auto dark:text-gray-200"><a href="https://twitter.com/" className="mr-4 hover:underline md:mr-8 "><FaTwitterSquare /> </a></div>
                </div>

                <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-300">
                    <li>
                        <a href="/about" className="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="/privacy" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="/licensing" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                    </li>
                    <li>
                        <a href="/contact" className="hover:underline">Contact</a>
                    </li>
                </ul>
                
            </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-300 lg:my-8" />
        <span 
            className="block text-sm text-yellow-600 sm:text-center dark:text-yellow-600">© 2022 
            <a href="/" className="hover:underline">AkifPenStore™</a>. 
            All Rights Reserved.
        </span>
        </footer>
    </div>
  )
}




