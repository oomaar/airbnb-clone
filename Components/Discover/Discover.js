export const Discover = ({ data }) => {
    const discoverData = data.map(place => (
        <div
            key={place.id}
            className="flex flex-col"
        >
            <img
                src={place.src}
                className="rounded-xl mb-4 object-contain cursor-pointer transform hover:scale-105
                transition duration-200"
            />
            <h3 className="text-xl font-bold">{place.text}</h3>
            <span className="text-gray-400">{place.subText}</span>
        </div>
    ));

    return (
        <div className="my-14 p-4">
            <h2 className="font-bold text-2xl lg:text-3xl">Live anywhere</h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 my-10">
                {discoverData}
            </div>
        </div>
    );
};
