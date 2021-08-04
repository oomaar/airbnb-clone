import { Banner, HeadTag, Header, Explore, Travel, Anywhere } from "../Components";
import airbnbData from "../data/airbnbData.json";

export default function Home() {
  return (
    <div>
      <HeadTag title="Airbnb: Vacation Rentals, Cabins, Beach Houses & Unique Homes" />

      <Header />
      <Banner />
      <main className="max-w-screen-2xl mx-auto">
        <Explore data={airbnbData.explore} />
        <Travel />
        <Anywhere data={airbnbData.anywhere} />
        <Explore data={airbnbData.explore} />
      </main>
    </div>
  )
}
