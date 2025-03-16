import React from "react";

import toilet_cleaning from "/images/toilet_cleaning.jpg";
import Image from "next/image";

const Services = () => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
                src={toilet_cleaning}
                alt="service"
                className="w-full h-48 object-cover"
            />
            <div className="p-6">
                <div className="flex items-center mb-4">
                    <i className="fas fa-toilet text-blue-600 text-2xl mr-2"></i>
                    <h3 className="text-xl font-bold text-blue-900">
                        Toilet Cleaning
                    </h3>
                </div>
                <p className="text-gray-600 mb-4">
                    As a app web crawler expert a significance of internet.
                </p>
                {/* <a
                                    className="text-blue-600 font-semibold flex items-center"
                                    href="#">
                                    <i className="fas fa-arrow-circle-right mr-2"></i>
                                    Read more
                                </a> */}
            </div>
        </div>
    );
};

export default Services;
