export const Travel = () => {
    return (
        <div className="relative">
            <div>
                <img
                    src="/home/togo.jpg"
                    className="w-full rounded-xl"
                />
            </div>
            <div className="absolute top-5 sm:top-1/3 left-10 w-full sm:w-1/3 flex sm:flex-col items-center">
                <h3 className="text-lg sm:text-2xl md:text-4xl w-1/4 sm:w-full mr-8 sm:mr-0 xl:text-6xl 
                    text-black font-bold">
                    Not sure where to go? Perfect.
                </h3>
                <button className="bg-black bg-opacity-90 text-white text-sm p-2 rounded-md my-2 cursor-pointer
                    md:text-md md:my-4 lg:text-lg lg:my-6 whitespace-nowrap sm:self-start">
                    I'm Flexable
                </button>
            </div>
        </div>
    );
};
