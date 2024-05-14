import Searchbar from "@/components/Searchbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold m-6 text-red-500">
        Is it a Tom Cruise movie, <span className="text-4xl font-bold m-6 text-red-600">or nah?</span>
      </h1>
      <h2 className="text-2xl m-2 p-3">
        Enter the title of a movie into the search bar, and click that Search
        button to find out!
      </h2>
      <Searchbar />
      <h2 className="text-2xl m-2 p-3">
        Or, you can check out the Tomography page featuring a comprehensive list
        of Tom Cruise movies that Tom Cruise acted in or worked on behind the
        scenes.
      </h2>
      <h2 className="text-xl my-6">
        This product uses the TMDB API but is not endorsed or certified by TMDB.
        We do not claim ownership of any of the images or data in the API.
      </h2>
      <Image
        src={"blue_square_TMDBlogo.svg"}
        alt="TMDB logo"
        width={200}
        height={50}
      />
    </main>
  );
}
