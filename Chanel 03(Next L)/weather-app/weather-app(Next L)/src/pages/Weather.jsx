import { Link, useLocation } from "react-router";
import { getWeather } from "../services/get-weather";
import { useEffect, useState } from "react";
import WeatherCard from "../components/WeatherCard";
import RecommandationCard from "../components/RecommendationCard";
import WeatherType from "../components/WeatherType";
import { getRecommandations } from "../utils/getRecommandations";
import Loader from "../components/Loader";

export default function Weather() {
  const value = useLocation();
  const place = value.state?.location;
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  // console.log(place);

  useEffect(() => {
    if (!place) return;

    const fetchWeather = async () => {
      setLoading(true);

      try {
        const result = await getWeather(place);
        setWeather(result);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [place]);

  return (
    <div className="max-w-6xl mx-auto">
      <header className="py-4">
        <div>
          <Link className="border border-2 rounded-full px-2 py-1" to={"/"}>
            Back To Home
          </Link>
        </div>
      </header>
      {loading ? (
        <Loader />
      ) : (
        <div className="grid md:grid-cols-2 gap-5">
          <div className="space-y-3">
            {/* Weather Card */}
            <WeatherCard place={place} weather={weather} />

            {/* Weather Recommendation Card */}
            <RecommandationCard recommendation={getRecommandations(weather)} />
          </div>

          {/* Weather Type Card */}
          <WeatherType place={place} weather={weather} />
        </div>
      )}
    </div>
  );
}
