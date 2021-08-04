import { SearchIcon } from "@heroicons/react/solid";
import { HeartIcon, UserCircleIcon, GlobeAltIcon, MenuIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";

export const Header = () => {
    const [show, setShow] = useState(false);
    const [active, setActive] = useState("Stay");
    const [location, setLocation] = useState(false);

    const scrollNavbar = () => {
        window.scrollY > 100 ? setShow(true) : setShow(false);
    };

    const handleSetLocation = () => setLocation((state) => !state);

    useEffect(() => {
        window.addEventListener("scroll", scrollNavbar);
        return () => window.removeEventListener("scroll", scrollNavbar);
    }, []);

    return (
        <div>
            {/* Mobile screens Header */}
            <header>
                {/* Top Header */}
                <nav className={`fixed right-0 left-0 flex justify-center p-10 cursor-pointer md:hidden 
                    z-50 ${show && 'bg-white'}`}>
                    <div className={`flex items-center justify-center bg-white px-10 py-4 rounded-3xl w-full
                        ${show && "shadow-2xl"}`}>
                        <SearchIcon className="h-10 text-red-400" />
                        <p className="text-black">Where are you going?</p>
                    </div>
                </nav>

                {/* bottom header */}
                <div className="fixed bottom-0 left-0 right-0 flex justify-center bg-white text-gray-400
                    p-4 md:hidden z-50">
                    <SearchIcon className="h-8 mx-5 cursor-pointer" />
                    <HeartIcon className="h-8 mx-5 cursor-pointer" />
                    <UserCircleIcon className="h-8 mx-5 cursor-pointer" />
                </div>
            </header>

            {/* Medium screens Header */}
            <header className={`fixed right-0 left-0 flex flex-col z-50 ${show && 'bg-white text-gray-500'}`}>
                {/* Top Nav */}
                <nav className="hidden md:flex justify-between items-center px-4">
                    {!show ? (
                        <div>
                            <img
                                src="/logo-white-small.png"
                                alt="small white logo"
                                className="h-20 lg:hidden cursor-pointer"
                            />
                            <img
                                src="/logo-white.png"
                                alt="small white logo"
                                className="h-20 hidden lg:block cursor-pointer"
                            />
                        </div>
                    ) : (
                        <div>
                            <img
                                src="/logo-small.png"
                                alt="small white logo"
                                className="h-20 lg:hidden cursor-pointer"
                            />
                            <img
                                src="/logo.png"
                                alt="small white logo"
                                className="h-20 hidden lg:block cursor-pointer"
                            />
                        </div>
                    )}

                    {show && (
                        <div className="flex items-center justify-between border rounded-full md:w-1/2 xl:w-1/4 px-5 
                            py-2 hover:shadow-md cursor-pointer transition duration-200">
                            <p>start your search</p>
                            <SearchIcon className="h-8 mx-5 cursor-pointer bg-red-600 rounded-full text-white" />
                        </div>
                    )}

                    <div className="flex items-center">
                        <p className="mx-2 font-bold cursor-pointer">Become a host</p>
                        <div className="mx-2">
                            <GlobeAltIcon className="h-6 cursor-pointer" />
                        </div>
                        <div className={`flex bg-white rounded-full text-gray-500 px-4 py-2
                            ${show && 'border-2 hover:bg-gray-200'}`}>
                            <MenuIcon className="h-6 cursor-pointer" />
                            <UserCircleIcon className="h-6 cursor-pointer" />
                        </div>
                    </div>
                </nav>

                {/* Bottom Nav */}
                {!show && (
                    <div className={`hidden md:flex flex-col mx-auto w-full lg:w-3/4 xl:w-2/3
                        ${active === "Experiences" && "md:w-3/5 lg:w-3/5 xl:w-1/2"}`}>
                        <div className="flex justify-center space-x-7 text-lg font-bold">
                            <p
                                className={`cursor-pointer ${active === "Stay" && "border-b-4"}`}
                                onClick={() => setActive("Stay")}
                            >
                                Places to stay
                            </p>
                            <p
                                className={`cursor-pointer ${active === "Experiences" && "border-b-4"}`}
                                onClick={() => setActive("Experiences")}
                            >
                                Experiences
                            </p>
                            <p
                                className="cursor-pointer"
                            >
                                Online Experiences
                            </p>
                        </div>
                        {active === "Stay" && (
                            <div className="flex bg-white rounded-full justify-between items-center my-5">
                                <div
                                    className="border-r-2 py-1 pr-10 pl-6 hover:bg-gray-200 hover:rounded-full 
                                    cursor-pointer flex-grow relative"
                                    onClick={handleSetLocation}
                                >
                                    <p className="text-black text-md">Location</p>
                                    <span className="text-gray-400 text-sm">Where are you ...</span>

                                    <div className={`bg-white absolute top-16 left-0 rounded-3xl
                                        px-20 py-10 flex-col ${location ? 'flex' : 'hidden'}`}>
                                        <p className="whitespace-nowrap text-black">GO ANYWHERE, ANYTIME</p>
                                        <div className="shadow-xl rounded-full border flex justify-between p-4 my-3
                                            cursor-pointer hover:shadow-2xl">
                                            <p className="text-purple-600 font-bold">I'm flexible</p>
                                            <video playsinline autoPlay width="28" height="28"
                                                preload="auto" crossorigin="anonymous" loop="true">
                                                <source src="/Video/right-chevron.mp4" />
                                            </video>
                                        </div>
                                    </div>

                                </div>

                                <div className="border-r-2 py-1 px-10 hover:bg-gray-200 hover:rounded-full 
                                    flex-grow cursor-pointer">
                                    <p className="text-black text-md">Check in</p>
                                    <span className="text-gray-400 text-sm">Add dates</span>
                                </div>
                                <div className="border-r-2 py-1 px-10 hover:bg-gray-200 hover:rounded-full 
                                    flex-grow cursor-pointer">
                                    <p className="text-black text-md">Check out</p>
                                    <span className="text-gray-400 text-sm">Add dates</span>
                                </div>
                                <div className="flex items-center justify-between px-6 hover:bg-gray-200 hover:rounded-full 
                                    flex-grow cursor-pointer">
                                    <div>
                                        <p className="text-black text-md">Guests</p>
                                        <span className="text-gray-400 text-sm">Add guests</span>
                                    </div>
                                    <SearchIcon className="h-8 p-1 cursor-pointer bg-red-600 rounded-full" />
                                </div>
                            </div>
                        )}
                        {active === "Experiences" && (
                            <div className="flex bg-white rounded-full justify-between items-center my-5">
                                <div className="border-r-2 py-1 pr-10 pl-6 hover:bg-gray-200 hover:rounded-full 
                                    cursor-pointer flex-grow">
                                    <p className="text-black text-md">Location</p>
                                    <span className="text-gray-400 text-sm">Where are you ...</span>
                                </div>
                                <div className="flex items-center px-6 hover:bg-gray-200 hover:rounded-full 
                                    flex-grow cursor-pointer justify-between">
                                    <div>
                                        <p className="text-black text-md">Date</p>
                                        <span className="text-gray-400 text-sm">Add when you want to go</span>
                                    </div>
                                    <SearchIcon className="h-8 p-1 cursor-pointer bg-red-600 rounded-full" />
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </header>
        </div>
    );
};
