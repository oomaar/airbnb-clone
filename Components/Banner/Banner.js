export const Banner = () => {
    return (
        <div
            className="bg-banner bg-no-repeat bg-top-left md:bg-center bg-cover h-vh-85 flex justify-center
            md:justify-start p-10"
        >
            <div className="flex flex-col justify-center items-center text-center md:w-1/3 lg:w-1/2
                xl:w-1/4 md:text-left lg:ml-40 md:mt-2"
            >
                <h1 className="text-4xl font-bold mb-10 md:text-5xl lg:text-7xl">
                    Olympian & Paralympian Online Experiences
                </h1>
                <button className="bg-white text-black p-2 rounded-md cursor-pointer md:self-start">
                    Explore Now
                </button>
            </div>
        </div>
    );
};
