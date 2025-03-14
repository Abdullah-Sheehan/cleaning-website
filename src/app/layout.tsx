import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Button from "./components/Buttons/Button";
import logo from "@/../public/images/logo.jpg";
import kitchen from "@/../public/images/kitchen.jpg";
import floor_cleaning from "@/../public/images/floor_cleaning.jpg";
import toilet_cleaning from "@/../public/images/toilet_cleaning.jpg";
import window1 from "@/../public/images/window1.jpg";
import window2 from "@/../public/images/window2.jpg";
import car from "@/../public/images/car.jpg";
import Image from "next/image";

// const geistSans = Geist({
//     variable: "--font-geist-sans",
//     subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//     variable: "--font-geist-mono",
//     subsets: ["latin"],
// });

const roboto = Roboto({
    subsets: ["latin"],
});
export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
            </head>
            <body className={roboto.className}>
                <div className="flex justify-between items-center p-4 bg-white">
                    <div className="text-sm text-gray-700">
                        Welcome to our{" "}
                        <span className="font-bold text-gray-900">
                            Clean Afford Cleaning Service!
                        </span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-700">
                        <div className="flex items-center space-x-1">
                            <i className="fas fa-phone-alt text-blue-500"></i>
                            <span>Call for help: (+123) 5462 3257</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <i className="fas fa-envelope text-blue-500"></i>
                            <span>Mail to us: envato@gmail.com</span>
                        </div>
                        <div className="flex space-x-2">
                            <a
                                href="#"
                                className="text-gray-700 hover:text-gray-900">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a
                                href="#"
                                className="text-gray-700 hover:text-gray-900">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a
                                href="#"
                                className="text-gray-700 hover:text-gray-900">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a
                                href="#"
                                className="text-gray-700 hover:text-gray-900">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <nav className="flex items-center justify-between p-4">
                    <div className="flex items-center">
                        <Image src={logo} alt="logo" className="h-10 w-10" />
                        <span className="ml-2 text-xl font-bold text-blue-900">
                            Clean Afford
                        </span>
                    </div>
                    {/* <div className="flex space-x-6 text-lg text-gray-800">
                        <a className="hover:text-blue-600" href="#">
                            Home
                        </a>
                        <a className="hover:text-blue-600" href="#">
                            Pages
                        </a>
                        <a className="hover:text-blue-600" href="#">
                            Services
                        </a>
                        <a className="hover:text-blue-600" href="#">
                            Portfolio
                        </a>
                        <a className="hover:text-blue-600" href="#">
                            Blog
                        </a>
                        <a className="hover:text-blue-600" href="#">
                            Elements
                        </a>
                    </div> */}
                    <div>
                        <Button buttonText="Call us now!" />
                    </div>
                </nav>
                {children}
                <footer className="bg-blue-900 text-white pt-10">
                    <div className="container mx-auto px-10">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <div>
                                <h2 className="text-2xl font-bold mb-4">
                                    We are {""}
                                    <span className="text-blue-500">
                                        Clean Afford!
                                    </span>
                                </h2>
                                <p className="mb-4">
                                    We work with a passion of taking challenges
                                    and creating new ones in advertising sector.
                                </p>
                                <p className="font-bold">Open Hours:</p>
                                <p>Mon – Sat: 8 am – 5 pm,</p>
                                <p>Sunday: CLOSED</p>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-4">
                                    Newsletter
                                </h2>
                                <p className="mb-4">
                                    Subscribe our newsletter to get our latest
                                    update &amp; news
                                </p>
                                <div className="flex">
                                    <input
                                        className="p-2 rounded-l bg-gray-800 text-white w-full"
                                        placeholder="Your mail address"
                                        type="email"
                                    />
                                    <button className="bg-blue-500 p-2 rounded-r">
                                        <i className="fas fa-paper-plane"></i>
                                    </button>
                                </div>
                                <div className="flex space-x-4 mt-4">
                                    <a className="text-blue-400" href="#">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a className="text-blue-400" href="#">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a className="text-blue-400" href="#">
                                        <i className="fab fa-dribbble"></i>
                                    </a>
                                    <a className="text-blue-400" href="#">
                                        <i className="fab fa-behance"></i>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-4">
                                    Official info:
                                </h2>
                                <p className="flex items-center mb-2">
                                    <i className="fas fa-map-marker-alt mr-2"></i>
                                    30 Commercial Road, Fratton, Australia
                                </p>
                                <p className="flex items-center mb-2">
                                    <i className="fas fa-phone-alt mr-2"></i>
                                    1-888-452-1505
                                </p>
                                <p className="flex items-center mb-2">
                                    <i className="fas fa-envelope mr-2"></i>
                                    envato@gmail.com
                                </p>
                                <p className="flex items-center">
                                    <i className="fas fa-envelope mr-2"></i>
                                    info@mail.com
                                </p>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-4">
                                    Instagram
                                </h2>
                                <div className="grid grid-cols-3 gap-2">
                                    <Image
                                        className="w-full h-full object-cover"
                                        src={car}
                                        alt="instagram"
                                    />
                                    <Image
                                        className="w-full h-full object-cover"
                                        src={kitchen}
                                        alt="instagram"
                                    />
                                    <Image
                                        className="w-full h-full object-cover"
                                        src={window1}
                                        alt="instagram"
                                    />
                                    <Image
                                        className="w-full h-full object-cover"
                                        src={window2}
                                        alt="instagram"
                                    />
                                    <Image
                                        className="w-full h-full object-cover"
                                        src={toilet_cleaning}
                                        alt="instagram"
                                    />
                                    <Image
                                        className="w-full h-full object-cover"
                                        src={floor_cleaning}
                                        alt="instagram"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-blue-800 text-center py-4 mt-10">
                        <p>
                            2025 © All rights reserved by{" "}
                            <span className="text-blue-500">Clean Afford!</span>
                        </p>
                    </div>
                </footer>
            </body>
        </html>
    );
}
