import { MapPin } from "lucide-react";
import StatCard from "./StatCard";

export default function WeatherCard({ place, weather }) {
  const stats = [
    { icon: "x", label: "Feels like", value: `${weather?.feelsLike} °C` },
    { icon: "y", label: "Humidity", value: `${weather?.humidity}%` },
    { icon: "z", label: "Wind speed", value: `${weather?.windSpeed} km/h` },
  ];

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

        <div className="grid grid-cols-3 gap-4">
          {stats.map((s) => (
            <StatCard key={s.icon} s={s} />
          ))}
        </div>
        
      </div>
    </div>
  );
}
