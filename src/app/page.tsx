import Image from "next/image";
import we from "@/../public/images/we.jpg";
import floor_cleaning from "@/../public/images/floor_cleaning.jpg";
import toilet_cleaning from "@/../public/images/toilet_cleaning.jpg";
import support from "@/../public/images/support.jpg";
import support2 from "@/../public/images/support2.jpg";
export default function Home() {
    return (
        <div className="">
            <div className="relative h-screen flex items-center justify-center">
                <Image
                    className="absolute inset-0 w-full h-full object-cover opacity-70"
                    src={we}
                    alt="bg-image"
                />
                <div className="relative z-10 text-white p-6 max-w-lg">
                    <p className="text-sm">We are Clean Afford</p>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Best cleaning service in town!
                    </h1>
                    <p className="mt-4 text-sm md:text-base">
                        As a app web crawler expert, I help organizations adjust
                        to the expanding significance.
                    </p>
                    <div className="mt-6 flex items-center space-x-4">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex items-center">
                            <i className="fas fa-play"></i>
                        </button>
                        <button className="bg-white text-gray-900 font-bold py-2 px-4 rounded-full flex items-center">
                            OUR SERVICES
                            <i className="fas fa-arrow-right ml-2"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row items-center justify-center lg:items-start lg:justify-center lg: items-center">
                    <div className="w-full lg:w-1/2">
                        <div className="relative">
                            <Image
                                src={floor_cleaning}
                                alt="about"
                                className="rounded-lg shadow-lg"
                            />
                            <div className="absolute top-4 left-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
                                <div className="flex items-center">
                                    <i className="fas fa-trophy text-2xl"></i>
                                    <div className="ml-2">
                                        <p className="text-xl font-bold">12+</p>
                                        <p className="text-sm">
                                            Years Experiences
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 lg:pl-8 mt-10">
                        <h2 className="text-gray-600 text-lg font-semibold">
                            About Cleaning Agency
                        </h2>
                        <h1 className="text-4xl font-bold text-blue-900 mt-2">
                            You can depend on us to get a good services
                        </h1>
                        <p className="text-gray-800 font-semibold mt-4">
                            We are Clean Afford, cleaning service provider.
                        </p>
                        <p className="text-gray-600 mt-4">
                            Clean Afford has been optimized to give your
                            visitors the best experience in terms of UX/UI, with
                            a unique design to deliver all layouts and blocks
                            you need.
                        </p>
                        {/* <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
                            ABOUT US
                            <i className="fas fa-arrow-right ml-2"></i>
                        </button> */}
                    </div>
                </div>
            </div>
            <section className="text-center py-12">
                <h2 className="text-blue-600 text-sm font-semibold mb-2">
                    Our featured services
                </h2>
                <h1 className="text-3xl font-bold text-blue-900 mb-8">
                    Why will you choose our services?
                </h1>
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                                    As a app web crawler expert a significance
                                    of internet.
                                </p>
                                {/* <a
                                    className="text-blue-600 font-semibold flex items-center"
                                    href="#">
                                    <i className="fas fa-arrow-circle-right mr-2"></i>
                                    Read more
                                </a> */}
                            </div>
                        </div>
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
                                    As a app web crawler expert a significance
                                    of internet.
                                </p>
                                {/* <a
                                    className="text-blue-600 font-semibold flex items-center"
                                    href="#">
                                    <i className="fas fa-arrow-circle-right mr-2"></i>
                                    Read more
                                </a> */}
                            </div>
                        </div>
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
                                    As a app web crawler expert a significance
                                    of internet.
                                </p>
                                {/* <a
                                    className="text-blue-600 font-semibold flex items-center"
                                    href="#">
                                    <i className="fas fa-arrow-circle-right mr-2"></i>
                                    Read more
                                </a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8">
                        <h2 className="text-lg font-semibold text-gray-600">
                            Client’s Testimonials
                        </h2>
                        <h1 className="text-4xl font-bold text-blue-900 mt-2">
                            We are very happy for client’s reviews.
                        </h1>
                    </div>
                    <div className="flex justify-center space-x-4 mb-8">
                        {/* <button className="w-10 h-10 flex items-center justify-center border border-blue-500 rounded-full text-blue-500">
                            <i className="fas fa-arrow-left"></i>
                        </button>
                        <button className="w-10 h-10 flex items-center justify-center border border-blue-500 rounded-full text-blue-500">
                            <i className="fas fa-arrow-right"></i>
                        </button> */}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <p className="text-gray-600 mb-4">
                                {
                                    "Theme is fully customizable, and customer support is excellent. Its most advanced theme i use ever."
                                }
                            </p>
                            <div className="flex items-center">
                                <Image
                                    className="w-12 h-12 rounded-full mr-4"
                                    src={support}
                                    alt="Portrait of Rapht Goki"
                                />
                                <div>
                                    <h3 className="text-blue-900 font-bold">
                                        Rapht Goki
                                    </h3>
                                    <p className="text-gray-500">
                                        Agent Manager
                                    </p>
                                    <div className="text-yellow-500">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <p className="text-gray-600 mb-4">
                                {
                                    "Theme is fully customizable, and customer support is excellent. Its most advanced theme i use ever."
                                }
                            </p>
                            <div className="flex items-center">
                                <Image
                                    className="w-12 h-12 rounded-full mr-4"
                                    src={support2}
                                    alt="Portrait of Rapht Goki"
                                />
                                <div>
                                    <h3 className="text-blue-900 font-bold">
                                        Rapht Goki
                                    </h3>
                                    <p className="text-gray-500">
                                        Agent Manager
                                    </p>
                                    <div className="text-yellow-500">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <p className="text-gray-600 mb-4">
                                {
                                    "Theme is fully customizable, and customer support is excellent. Its most advanced theme i use ever."
                                }
                            </p>
                            <div className="flex items-center">
                                <Image
                                    className="w-12 h-12 rounded-full mr-4"
                                    src={support}
                                    alt="Portrait of Rapht Goki"
                                />
                                <div>
                                    <h3 className="text-blue-900 font-bold">
                                        Rapht Goki
                                    </h3>
                                    <p className="text-gray-500">
                                        Agent Manager
                                    </p>
                                    <div className="text-yellow-500">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
