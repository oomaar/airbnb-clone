import Image from "next/image";

export const Explore = ({ data }) => {
    const exploreData = data.map(city => (
        <div className="flex cursor-pointer transfrom hover:scale-105 transition duration-200" key={city.id}>
            <div>
                <Image
                    className="rounded-lg"
                    src={city.src}
                    width={90}
                    height={90}
                    objectFit="contain"
                />
            </div>
            <div className="mx-8">
                <h4>{city.city}</h4>
                <span>{city.drive} drive</span>
            </div>
        </div>
    ));

    return (
        <div className="my-14 p-4">
            <h2 className="font-bold text-2xl lg:text-3xl">Explore nearbay</h2>

            <div className="grid gap-4 my-9 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {exploreData}
            </div>
        </div>
    );
};
