export const Travel = () => {
    return (
        <div className="relative">
            <div>
                <img
                    src="/home/togo.jpg"
                    className="w-full rounded-xl"
                />
            </div>
            <div className="absolute top-0 sm:top-1/3 left-10 w-1/3">
                <h3 className="text-lg sm:text-2xl md:text-4xl xl:text-6xl text-black font-bold">
                    Not sure where to go? Perfect.
                </h3>
                <button className="bg-black bg-opacity-90 text-white text-sm p-2 rounded-md my-2 cursor-pointer
                    md:text-md md:my-4 lg:text-lg lg:my-6">
                    I'm Flexable
                </button>
            </div>
        </div>
    );
};
