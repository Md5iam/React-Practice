import { MapPin } from "lucide-react";

export default function WeatherCard({place , weather}) {
  return (
    <div className="shadow-2xl rounded-2xl p-5">
      <div className="space-y-3">
        <h1 className="text-2xl text-blue-500 font-semibold">
          Today's Weather Details{" "}
        </h1>
        <div className="flex items-center gap-3">
          <MapPin size={30} />
          <h2 className="text-4xl text-purple-500 font-semibold">
            {place?.name}
          </h2>
        </div>
        <div className="flex items-center gap-16">
          <h3 className="text-6xl text-purple-900 font-extrabold">
            {weather?.temperature} C
          </h3>
          <p className="text-4xl text-purple-800 font-extrabold">
            {weather?.description}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="rounded-2xl shadow-2xl p-4 text-center">
            <h3 className="text-lg text-purple-900 font-bold">Feels Like</h3>
            <p className="text-4xl text-purple-800 font-extrabold">
              {weather?.feelsLike}
            </p>
          </div>
          <div className="rounded-2xl shadow-2xl p-4 text-center">
            <h3 className="text-lg text-purple-900 font-bold">Humidity</h3>
            <p className="text-4xl text-purple-800 font-extrabold">
              {weather?.humidity}
            </p>
          </div>
          <div className="rounded-2xl shadow-2xl p-4 text-center">
            <h3 className="text-lg text-purple-900 font-bold">Wind Speed</h3>
            <p className="text-4xl text-purple-800 font-extrabold">
              {weather?.windSpeed}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
